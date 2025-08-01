window.addEventListener('DOMContentLoaded', function() {
    const canvas = document.getElementById('bg-anim');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener('resize', resize);

    const pulses = [];
    const pulseCount = 4;
    for (let i = 0; i < pulseCount; i++) {
        pulses.push({
            x: Math.random() * canvas.width,
            y: Math.random() * window.innerHeight + window.scrollY,
            r: 0,
            maxR: 120 + Math.random() * 80,
            speed: 0.2 + Math.random() * 0.2,
            alpha: 0.5 + Math.random() * 0.3,
            delay: Math.random() * 2000
        });
    }

    let scrollY = window.scrollY;
    window.addEventListener('scroll', function() {
        scrollY = window.scrollY;
    });

    const mouseTrail = [];

    window.addEventListener('click', function(e) {
        mouseTrail.push({
            x: e.clientX,
            y: e.clientY + scrollY,
            r: 0,
            maxR: 40 + Math.random() * 20,
            speed: 0.6,
            alpha: 0.8
        });

        if (mouseTrail.length > 1) {
            mouseTrail.shift();
        }
    });

    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        pulses.forEach(pulse => {
            if (pulse.delay > 0) {
                pulse.delay -= 16;
                return;
            }
            pulse.r += pulse.speed;
            if (pulse.r > pulse.maxR) {
                pulse.x = Math.random() * canvas.width;
                pulse.y = Math.random() * window.innerHeight + scrollY;
                pulse.r = 0;
                pulse.maxR = 120 + Math.random() * 80;
                pulse.speed = 0.2 + Math.random() * 0.2;
                pulse.alpha = 0.5 + Math.random() * 0.3;
                pulse.delay = Math.random() * 2000;
            }
            ctx.beginPath();
            ctx.arc(pulse.x, pulse.y - scrollY, pulse.r, 0, 2 * Math.PI);
            ctx.strokeStyle = `rgba(52, 152, 255, ${pulse.alpha * (1 - pulse.r / pulse.maxR)})`;
            ctx.lineWidth = 4;
            ctx.stroke();
        });

        for (let i = 0; i < mouseTrail.length; i++) {
            const t = mouseTrail[i];
            t.r += t.speed;
            ctx.beginPath();
            ctx.arc(t.x, t.y - scrollY, t.r, 0, 2 * Math.PI);
            ctx.strokeStyle = `rgba(0, 150, 255, ${t.alpha * (1 - t.r / t.maxR)})`;
            ctx.lineWidth = 2;
            ctx.stroke();
            if (t.r > t.maxR) {
                mouseTrail.splice(i, 1);
                i--;
            }
        }

        requestAnimationFrame(draw);
    }

    draw();
});
