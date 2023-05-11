const path = require('path')

/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true,
    },
    images: {
        domains: [
            'lh3.googleusercontent.com',
            'qeeundgfwrhtssanilnc.supabase.co',
        ],
    },
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
}

module.exports = nextConfig
