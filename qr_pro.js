const qrCode = new QRCodeStyling({
    width: 300,
    height: 300,
    data: "https://ejemplo.com",
    dotsOptions: {
        color: "#000000",
        type: "rounded",
    },
    cornersSquareOptions: {
        type: "extra-rounded",
    },
    backgroundOptions: {
        color: "#ffffff",
    },
});

document.addEventListener("DOMContentLoaded", () => {
    qrCode.append(document.getElementById("qr-code"));
    actualizarQR();

    const inputs = [
        "#qrText",
        "#qrColor",
        "#bgColor",
        "#dotStyle",
        "#cornerStyle",
        "#qrSize",
    ];

    inputs.forEach((selector) => {
        document.querySelector(selector).addEventListener("input", actualizarQR);
    });

    document.getElementById("qrLogo").addEventListener("change", actualizarQR);
});

function actualizarQR() {
    const text = document.getElementById("qrText").value;
    const color = document.getElementById("qrColor").value;
    const bgColor = document.getElementById("bgColor").value;
    const dotStyle = document.getElementById("dotStyle").value;
    const cornerStyle = document.getElementById("cornerStyle").value;
    const size = parseInt(document.getElementById("qrSize").value);

    const updateData = {
        width: size,
        height: size,
        data: text,
        dotsOptions: {
            color,
            type: dotStyle,
        },
        cornersSquareOptions: {
            type: cornerStyle,
            color,
        },
        backgroundOptions: {
            color: bgColor,
        },
        image: "QR.png",
    };

    qrCode.update(updateData);

    const logoInput = document.getElementById("qrLogo");
    const file = logoInput.files[0];

    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            qrCode.update({
                image: e.target.result,
                imageOptions: {
                    crossOrigin: "anonymous",
                    margin: 10,
                },
            });
        };
        reader.readAsDataURL(file);
    }
}

function descargarQR() {
    const nombre = prompt("Ingrese el nombre del archivo:", "qr-personalizado");

    // Si el usuario cancela o no escribe nada, salimos
    if (!nombre) return;

    qrCode.download({
        name: nombre,
        extension: "png",
    });
}

