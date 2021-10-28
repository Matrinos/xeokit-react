import { math } from '@tuxmart/xeokit-sdk';

export const getAABBCenter = (aabb: Float64Array): [number, number, number] => [
  (aabb[3] + aabb[0]) / 2,
  (aabb[4] + aabb[1]) / 2,
  (aabb[5] + aabb[2]) / 2,
];

export const get2dFrom3d = (
  w: number,
  h: number,
  cameraMatrix: number[],
  point: number[],
): [number, number] => {
  const x = math.transformPoint4(cameraMatrix, [...point, 1]);
  return [-(((x[0] / x[2] / x[3]) * w) / 2) + w / 2, (x[1] / x[2] / x[3]) * h + h / 2];
};

const drawLine = (ctx: CanvasRenderingContext2D, from: [number, number], to: [number, number]) => {
  ctx.moveTo(from[0], from[1]);
  ctx.lineTo(to[0], to[1]);
};

export const drawAABB = (
  canvasContext: CanvasRenderingContext2D,
  cameraMatrix: number[],
  aabb: number[],
): void => {
  // vertices of AABB
  const vertices = [
    [aabb[0], aabb[1], aabb[2]],
    [aabb[0], aabb[1], aabb[5]],
    [aabb[0], aabb[4], aabb[2]],
    [aabb[0], aabb[4], aabb[5]],
    [aabb[3], aabb[1], aabb[2]],
    [aabb[3], aabb[1], aabb[5]],
    [aabb[3], aabb[4], aabb[2]],
    [aabb[3], aabb[4], aabb[5]],
  ];

  const points2d = vertices.map((p) =>
    get2dFrom3d(canvasContext.canvas.width, canvasContext.canvas.height, cameraMatrix, p),
  );
  const bimCtx = canvasContext;
  if (bimCtx) {
    bimCtx.strokeStyle = 'rgb(0, 255, 0)';
    bimCtx.beginPath();

    drawLine(bimCtx, points2d[0], points2d[1]);
    drawLine(bimCtx, points2d[0], points2d[2]);
    drawLine(bimCtx, points2d[0], points2d[4]);
    drawLine(bimCtx, points2d[7], points2d[3]);
    drawLine(bimCtx, points2d[7], points2d[5]);
    drawLine(bimCtx, points2d[7], points2d[6]);
    drawLine(bimCtx, points2d[2], points2d[6]);
    drawLine(bimCtx, points2d[3], points2d[2]);
    drawLine(bimCtx, points2d[1], points2d[3]);
    drawLine(bimCtx, points2d[1], points2d[5]);
    drawLine(bimCtx, points2d[4], points2d[5]);
    drawLine(bimCtx, points2d[4], points2d[6]);

    bimCtx.stroke();
  }
};
