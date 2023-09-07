<script lang="ts">
    import LoadingPage from "$lib/components/camera/LoadingPage.svelte"
    import type { DetectedObject } from "@tensorflow-models/coco-ssd"
    import * as cocoSsd from "@tensorflow-models/coco-ssd"

    import * as tf from "@tensorflow/tfjs"
    import "@tensorflow/tfjs-backend-webgl"
    import { onMount } from "svelte"
    import { writable } from "svelte/store"

    let video: HTMLVideoElement
    let canvas: HTMLCanvasElement
    let context: CanvasRenderingContext2D | null

    const isReady = writable(false)

    onMount(async () => {
        await tf.setBackend("webgl")

        context = canvas.getContext("2d")
        if (!context) return

        const model = await cocoSsd.load()

        video.srcObject = await navigator.mediaDevices.getUserMedia({
            video: { facingMode: "environment" },
            audio: false,
        }).then((stream) => {
            isReady.set(true)
            return stream
        })

        video.onloadedmetadata = () => {
            predict(model)
        }
    })

    function predict(model: any) {
        context?.clearRect(0, 0, video.width, video.height)
        model.detect(video).then((predictions: DetectedObject[]) => {
            canvas.width = video.videoWidth
            canvas.height = video.videoHeight

            predictions.forEach((prediction: DetectedObject) => {
                if (!context) return
                context.beginPath()
                context.rect(...prediction.bbox)
                context.lineWidth = 1
                context.strokeStyle = "#" + Math.floor(Math.random() * 16777215).toString(16)
                context.stroke()
                context.font = "24px Arial"
                context.fillStyle = context.strokeStyle
                context.fillText(
                    `${prediction.class} ${parseInt((prediction.score * 100).toString())}%`,
                    prediction.bbox[0],
                    prediction.bbox[1] < 25 ? prediction.bbox[1] + 25 : prediction.bbox[1],
                )
            })
            requestAnimationFrame(() => predict(model))
        })
    }
</script>

<div class="container">
    <video id="video" autoplay muted playsinline bind:this={video}></video>
    <canvas id="canvas" bind:this={canvas}></canvas>
    {#if $isReady === false}
        <LoadingPage />
    {/if}
</div>

<style>
    .container {
        position: relative;
        width: 100%;
        height: 100%;
    }

    #video, #canvas {
        position: absolute;
        width: 100%;
        height: 100%;
    }
</style>