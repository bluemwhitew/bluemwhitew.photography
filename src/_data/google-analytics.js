module.exports = async () => {
    let getGoogleAnalyticsTrackingId = process.env.GOOGLE_ANALYTICS_TRACKING_ID;

    if (process.env.NODE_ENV !== 'production' || !getGoogleAnalyticsTrackingId) {
        return false;
    }

    return getGoogleAnalyticsTrackingId;
}
