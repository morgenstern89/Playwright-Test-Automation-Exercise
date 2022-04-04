const {PlaywrightTestConfigs}=require('@playwright/test');

const config = {
    retries: 0,
    timeout: 30000,
    reporter:'./reporter.js',
    use: {
        baseURL: "https://the-internet.herokuapp.com",
        headless: true,
        viewport: {width: 1280, height:720},
        video: "off",
        screenshot: "only-on-failure",
        trace:"on-first-retry"
    },

    projects:[
        {
            name: 'Chrome',
            use: {browserName: 'chromium'}
        },

        {
            name: 'Firefox',
            use: {browserName: 'firefox'}
        },

        {
            name: 'webkit',
            use: {browserName: 'webkit'}
        },
    ]
}

module.exports = config;