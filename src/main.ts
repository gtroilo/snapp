import { bootstrapCameraKit } from '@snap/camera-kit';

(async function () {
  const cameraKit = await bootstrapCameraKit({ apiToken: 'eyJhbGciOiJIUzI1NiIsImtpZCI6IkNhbnZhc1MyU0hNQUNQcm9kIiwidHlwIjoiSldUIn0.eyJhdWQiOiJjYW52YXMtY2FudmFzYXBpIiwiaXNzIjoiY2FudmFzLXMyc3Rva2VuIiwibmJmIjoxNjg0Mjk0NTAzLCJzdWIiOiJjODczY2ViNi0zZjIxLTQwMGItOTAxMC1hOWNmMWNkOTA1ZjR-U1RBR0lOR34yODRmZTVmOC1lZTc4LTRiZDQtYWQyMS01MGRlZDUwNjNkZmUifQ.5r5AfhuLFLs3aB9bCqyI92juwzntz4I6V7lFs0yvaQk' });
  const liveRenderTarget = document.getElementById('canvas') as HTMLCanvasElement;
  const session = await cameraKit.createSession({ liveRenderTarget });
  const mediaStream = await navigator.mediaDevices.getUserMedia({
    video: true,
  });
  await session.setSource(mediaStream);
  await session.play();
  const lens = await cameraKit.lensRepository.loadLens(
    'ace0ab25-7dc1-405f-8a38-213758b6bdf6',
    '492a6a89-98fa-4d03-9932-acd6a7695fe3'
  );
  
  await session.applyLens(lens);
})();
