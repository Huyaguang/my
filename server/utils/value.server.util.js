'use strict';

exports.SIGNUP_VERIFICATION = 'nicaicai';

exports.UPDATE_PASSWORD_VERIFICATION = '我是谁啊';

exports.DOMAIN_URL = 'www.huyaguang.com';

exports.BLOG_TYPE = {
    NORMAL: 1,
    TOP: 2,
    PRIVACY: 9
};

if (process.env.NODE_ENV === 'production') {
    exports.MASTER_ID = '5aa10ee8cd78b025b7593041';
} else if (process.env.NODE_ENV === 'development') {
    exports.MASTER_ID = '58788dc364a1d01509d83e55';
}