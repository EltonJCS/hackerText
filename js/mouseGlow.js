const mouseGlow = document.getElementById("mouse_glow");

document.body.onpointermove = (event) => {
  const { clientX, clientY } = event;

  mouseGlow.style.left = `${clientX}px`;
  mouseGlow.style.top = `${clientY}px`;
};
