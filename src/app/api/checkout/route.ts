import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { items, email, name } = body;

    if (!items || !Array.isArray(items) || items.length === 0) {
      return NextResponse.json(
        { error: 'No items in the cart' },
        { status: 400 }
      );
    }

    // Mock processing order
    const orderId = `SKATE-${Math.floor(100000 + Math.random() * 900000)}`;
    const total = items.reduce((acc: number, item: any) => acc + item.price * item.quantity, 0);

    return NextResponse.json({
      success: true,
      orderId,
      total,
      message: 'Order created successfully!',
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to process checkout' },
      { status: 500 }
    );
  }
}
