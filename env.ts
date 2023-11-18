import { createEnv } from '@t3-oss/env-nextjs'
import { z } from 'zod'

export const env = createEnv({
    server: {
        NEXTAUTH_SECRET: z.string().min(1),
        GOOGLE_CLIENT_ID: z.string().min(1),
        GOOGLE_CLIENT_SECRET: z.string().min(1),
        MONGODB_URI: z.string().min(1),
        NEXTAUTH_URL: z.string().url(),
        STRIPE_API_KEY: z.string().min(1),
        STRIPE_WEBHOOK_SECRET: z.string().min(1),
        WEB_URL: z.string().url(),
        STRIPE_PLAN_PREMIUM: z.string().min(1),
        AWS_ACCESS_KEY_ID: z.string().min(1),
        AWS_SECRET_ACCESS_KEY: z.string().min(1),
        RUNPOD_API_SECRET: z.string().min(1),
        AWS_CKPT_BUCKET_NAME: z.string().min(1),
        AWS_ZIP_BUCKET_NAME: z.string().min(1),
        AWS_REGION: z.string().min(1),
        CF_ACCOUNT_ID: z.string().min(1),
        CF_API_TOKEN: z.string().min(1),
        RUNPOD_SERVERLESS_ID: z.string().min(1),
        STRIPE_UNLOCK_20_PLAN: z.string().min(1),
    },
    client: {},
    runtimeEnv: {
        NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
        GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
        GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
        MONGODB_URI: process.env.MONGODB_URI,
        NEXTAUTH_URL: process.env.NEXTAUTH_URL,
        STRIPE_API_KEY: process.env.STRIPE_API_KEY,
        STRIPE_WEBHOOK_SECRET: process.env.STRIPE_WEBHOOK_SECRET,
        WEB_URL: process.env.WEB_URL,
        STRIPE_PLAN_PREMIUM: process.env.STRIPE_PLAN_PREMIUM,
        AWS_ACCESS_KEY_ID: process.env.AWS_ACCESS_KEY_ID,
        AWS_SECRET_ACCESS_KEY: process.env.AWS_SECRET_ACCESS_KEY,
        RUNPOD_API_SECRET: process.env.RUNPOD_API_SECRET,
        AWS_CKPT_BUCKET_NAME: process.env.AWS_CKPT_BUCKET_NAME,
        AWS_ZIP_BUCKET_NAME: process.env.AWS_ZIP_BUCKET_NAME,
        AWS_REGION: process.env.AWS_REGION,
        CF_ACCOUNT_ID: process.env.CF_ACCOUNT_ID,
        CF_API_TOKEN: process.env.CF_API_TOKEN,
        RUNPOD_SERVERLESS_ID: process.env.RUNPOD_SERVERLESS_ID,
        STRIPE_UNLOCK_20_PLAN: process.env.STRIPE_UNLOCK_20_PLAN,
    },
})
