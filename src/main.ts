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
    'd840f171-cad1-4189-b3e7-c9a30b80bd60',
    '492a6a89-98fa-4d03-9932-acd6a7695fe3'
  );
  
  await session.applyLens(lens);
})();
