const Subscription = require('./subscriptionModel');

// Create a new subscription
const createSubscription = async (req, res) => {
    const { userId, plan, endDate } = req.body;

    try {
        const subscription = new Subscription({
            userId,
            plan,
            endDate,
        });
        await subscription.save();
        res.status(201).json({ message: 'Subscription created successfully', subscription });
    } catch (error) {
        res.status(500).json({ message: 'Failed to create subscription', error: error.message });
    }
};

// Get subscription by user ID
const getSubscriptionByUser = async (req, res) => {
    const { userId } = req.params;

    try {
        const subscription = await Subscription.findOne({ userId }).populate('userId');
        if (!subscription) {
            return res.status(404).json({ message: 'No subscription found for this user' });
        }
        res.status(200).json(subscription);
    } catch (error) {
        res.status(500).json({ message: 'Failed to retrieve subscription', error: error.message });
    }
};

// Cancel a subscription
const cancelSubscription = async (req, res) => {
    const { userId } = req.params;

    try {
        const subscription = await Subscription.findOneAndUpdate(
            { userId },
            { isActive: false },
            { new: true }
        );
        if (!subscription) {
            return res.status(404).json({ message: 'No subscription found for this user' });
        }
        res.status(200).json({ message: 'Subscription cancelled', subscription });
    } catch (error) {
        res.status(500).json({ message: 'Failed to cancel subscription', error: error.message });
    }
};

module.exports = {
    createSubscription,
    getSubscriptionByUser,
    cancelSubscription,
};
