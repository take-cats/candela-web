import { defineConfig, minimalPreset as preset } from '@vite-pwa/assets-generator/config'

// noinspection JSUnusedGlobalSymbols
export default defineConfig({
    preset,
    images: [
        'static/favicon.png'
    ]
})