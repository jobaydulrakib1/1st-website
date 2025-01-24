const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY); // Using Stripe as a payment gateway

// Create a payment intent
const createPaymentIntent = async (req, res) => {
    const { amount, currency } = req.body;

    try {
        const paymentIntent = await stripe.paymentIntents.create({
            amount,
            currency,
            payment_method_types: ['card'],
        });

        res.status(201).json({
            clientSecret: paymentIntent.client_secret,
            message: 'Payment intent created successfully',
        });
    } catch (error) {
        res.status(500).json({ message: 'Failed to create payment intent', error: error.message });
    }
};

// Confirm payment
const confirmPayment = async (req, res) => {
    const { paymentIntentId } = req.body;

    try {
        const paymentIntent = await stripe.paymentIntents.retrieve(paymentIntentId);
        if (paymentIntent.status === 'succeeded') {
            res.status(200).json({ message: 'Payment confirmed successfully', paymentIntent });
        } else {
            res.status(400).json({ message: 'Payment not successful', paymentIntent });
        }
    } catch (error) {
        res.status(500).json({ message: 'Failed to confirm payment', error: error.message });
    }
};

// Refund payment
const refundPayment = async (req, res) => {
    const { paymentIntentId } = req.body;

    try {
        const refund = await stripe.refunds.create({
            payment_intent: paymentIntentId,
        });

        res.status(200).json({ message: 'Refund processed successfully', refund });
    } catch (error) {
        res.status(500).json({ message: 'Failed to process refund', error: error.message });
    }
};

module.exports = {
    createPaymentIntent,
    confirmPayment,
    refundPayment,
};
