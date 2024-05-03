import { NextResponse } from "next/server";
import prisma from "@/app/lib/next-auth/prisma";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(request: Request, response: Response) {
  const { sessionId } = await request.json();
  try {
    const session = await stripe.checkout.sessions.retrieve(sessionId);

    const existingPurchase = await prisma.purchase.findFirst({
      where: {
        userId: session.client_reference_id!,
        bookId: session.metadata?.bookId!,
      },
    });
    if (existingPurchase) {
      return NextResponse.json({ message: "Already purchased" });
    }
    const purchase = await prisma.purchase.create({
      data: {
        userId: session.client_reference_id!,
        bookId: session.metadata?.bookId!,
      },
    });
    return NextResponse.json({ purchase });
  } catch (error: any) {
    return NextResponse.json(error);
  }
}
