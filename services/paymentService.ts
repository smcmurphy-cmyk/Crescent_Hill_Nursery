// services/paymentService.ts

interface PaymentIntent {
  amount: number;
  currency: string;
}

export const processStripePayment = async (token: string, details: PaymentIntent) => {
  console.log("Processing Stripe Payment...", details);
  
  // SIMULATION: In a real app, you MUST send 'token' to your backend server.
  // Never process credit cards directly in the browser JavaScript.
  
  await new Promise(resolve => setTimeout(resolve, 2000));
  
  // Randomly succeed or fail for testing
  const success = Math.random() > 0.1; 
  if (!success) throw new Error("Card declined. Please try again.");
  
  return { transactionId: `ch_${Date.now()}`, status: 'success' };
};