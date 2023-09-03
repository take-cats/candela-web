<script lang="ts">
    import type { DetectedObject } from "@tensorflow-models/coco-ssd"
    import { onMount } from "svelte"
    import * as cocoSsd from "@tensorflow-models/coco-ssd"

    let video: HTMLVideoElement
    let canvas: HTMLCanvasElement
    let context: CanvasRenderingContext2D | null

    onMount(async () => {
        context = canvas.getContext("2d")
        if (!context) return

        const model = await cocoSsd.load()

        video.srcObject = await navigator.mediaDevices.getUserMedia({ video: true, audio: false })
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
                if (context) {
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
                }
            })
            requestAnimationFrame(() => predict(model))
        })
    }
</script>

<div class="container">
    <video id="video" width="640" height="480" autoplay muted playsinline bind:this={video}></video>
    <canvas id="canvas" bind:this={canvas}></canvas>
</div>

<style>
    .container {
        position: relative;
        width: 640px;
        height: 480px;
    }

    #video, #canvas {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
</style>