var jws = require('jws-jwk');

exports.handler = (event, context, callback) => {
    // TODO implement

    var signature = "eyJraWQiOiJkZFBVRER5VXBIMk41d0dTWHZucVFaeS1PbVRGU1Z1NVBZYW5zanBzb0FzIiwiYWxnIjoiUlMyNTYifQ.eyJzdWIiOiIwMHUxOGVlaHUzNDlhUzJ5WDFkOCIsIm5hbWUiOiJva3RhcHJveHkgb2t0YXByb3h5IiwidmVyIjoxLCJpc3MiOiJodHRwczovL2NvbXBhbnl4Lm9rdGEuY29tIiwiYXVkIjoidlpWNkNwOHJuNWx4ck45YVo2ODgiLCJpYXQiOjE1MjQzMzk3NjMsImV4cCI6MTUyNDM0MzM2MywianRpIjoiSUQuRThUU2Z3aWtud3d1UXoxeUJJb3NCTWw3QmFJZU1pOXB2R2Q0QnI5NWZLQSIsImFtciI6WyJwd2QiXSwiaWRwIjoiMDBveTc0YzBnd0hOWE1SSkJGUkkiLCJub25jZSI6Im4tMFM2X1d6QTJNaiIsInByZWZlcnJlZF91c2VybmFtZSI6Im9rdGFwcm94eUBva3RhLmNvbSIsImF1dGhfdGltZSI6MTUyNDMzOTcxNCwiYXRfaGFzaCI6IldoOGZfdzl0WVliem1zRFpUcFFpZWcifQ.a7sWIKicfClw93ogxJ7qC4yVUm1vNBqJb2JqlHIpyEym3svpYFRh4CKkFEYehXSUj5THzgDyLc8wlcgzghQr68FZyq7sMYncvOPEYZOUZNeSqybhNjVByNQJAmCAq-Eb2KYmLve3Rx_LkjRt7TvsfKsJuN2QIpN7hvrf42Lo2bnqV06pO8eVQg108dYVLULH6bx5WgQbkUzgv2om4NYsiPMfJs9sH3o6ocyTXgDSqkzcOCvAyFd5VXlXXqZSTT59QEbkWjnbGjh71vxREYFlWq_yi2Ar6Na_swq-xa_vt0GVgW8dKvlp42ByW1h8Pz0y15s0GSnXcx5K4qtY5kWt8g";

    var jwk = { kid: 'xdPUDDyUpH2N5wGSXvnqQZy-OmTFSVu5PYansjpsoAs', kty: 'RSA', n: 'o_CYYN5Lo9XuCRADNxqDTVolcWshv7LD7EmwFCvtbdHErvfOQPHyAFMLMDKracToe2Rg7cBihYC_wgHRItXAgxAM6P7mNT_DvbLpp2HtbMtmYLtWyGqHJsJQE9gNSOMsxEugxq9lpGjROiU2nZm7TZ-QwVV-F7dfBl0NBVy5oFbTCRUDxFcKOr_zh3xK-fRIsJbqbB4VPt8IhA_GjvjyoMlH0pfhoRqDMWk8vLXHhRxYlT5bZP1PDulFMGGO8KH7Cvh4D0cZE9mSiUFyVlDDzCbAH88a0TAGYkqERdVfHBYaTsCCseBqsvUoqbdzQwd2fOLf-N0jpSdNMNxHGNwl3w', e: 'AQAB' };

    if (jws.verify(signature, jwk)) {
        // Do stuff here, signature was verified using the JWK
        callback(null, 'Good');    }
    else {

        callback(null, 'Bad');    }

    // callback(null, 'Hello from Lambda');
};

