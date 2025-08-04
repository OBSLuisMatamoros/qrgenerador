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

    document.getElementById("qrLogo").addEventListener("change", handleImageUpload);
    document.getElementById("mySwitch").addEventListener("change", handleSwitchToggle);
});

let defaultLogo = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAIAAAADnC86AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAEn2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSfvu78nIGlkPSdXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQnPz4KPHg6eG1wbWV0YSB4bWxuczp4PSdhZG9iZTpuczptZXRhLyc+CjxyZGY6UkRGIHhtbG5zOnJkZj0naHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyc+CgogPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9JycKICB4bWxuczpBdHRyaWI9J2h0dHA6Ly9ucy5hdHRyaWJ1dGlvbi5jb20vYWRzLzEuMC8nPgogIDxBdHRyaWI6QWRzPgogICA8cmRmOlNlcT4KICAgIDxyZGY6bGkgcmRmOnBhcnNlVHlwZT0nUmVzb3VyY2UnPgogICAgIDxBdHRyaWI6Q3JlYXRlZD4yMDI1LTA4LTA0PC9BdHRyaWI6Q3JlYXRlZD4KICAgICA8QXR0cmliOkV4dElkPjJmYzg0YTA1LTM4YzktNDI5YS1iNDc2LTQwYWNhYmM5YjAzZjwvQXR0cmliOkV4dElkPgogICAgIDxBdHRyaWI6RmJJZD41MjUyNjU5MTQxNzk1ODA8L0F0dHJpYjpGYklkPgogICAgIDxBdHRyaWI6VG91Y2hUeXBlPjI8L0F0dHJpYjpUb3VjaFR5cGU+CiAgICA8L3JkZjpsaT4KICAgPC9yZGY6U2VxPgogIDwvQXR0cmliOkFkcz4KIDwvcmRmOkRlc2NyaXB0aW9uPgoKIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PScnCiAgeG1sbnM6ZGM9J2h0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvJz4KICA8ZGM6dGl0bGU+CiAgIDxyZGY6QWx0PgogICAgPHJkZjpsaSB4bWw6bGFuZz0neC1kZWZhdWx0Jz5RUiAtIDE8L3JkZjpsaT4KICAgPC9yZGY6QWx0PgogIDwvZGM6dGl0bGU+CiA8L3JkZjpEZXNjcmlwdGlvbj4KCiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0nJwogIHhtbG5zOnBkZj0naHR0cDovL25zLmFkb2JlLmNvbS9wZGYvMS4zLyc+CiAgPHBkZjpBdXRob3I+bHVpcyBtYXQ8L3BkZjpBdXRob3I+CiA8L3JkZjpEZXNjcmlwdGlvbj4KCiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0nJwogIHhtbG5zOnhtcD0naHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyc+CiAgPHhtcDpDcmVhdG9yVG9vbD5DYW52YSBkb2M9REFHdkVhSHhTdE0gdXNlcj1VQURGcGVEa3NPNCBicmFuZD1CQURGcFFaeW93YyB0ZW1wbGF0ZT08L3htcDpDcmVhdG9yVG9vbD4KIDwvcmRmOkRlc2NyaXB0aW9uPgo8L3JkZjpSREY+CjwveDp4bXBtZXRhPgo8P3hwYWNrZXQgZW5kPSdyJz8+C+ueAAAABGBJREFUWIXtV9krrW0U3+ZkSLggZCxz4sIFZUhEUuRGKaJPZinThSkkiZQ5iTv5A9xQknKhiLhQChe4UmTKeBzv+bV/n7Xf/e7XifOd06kv6+Lt2c+z1vqt+Xm2QflLZPgC/gL+Av6zwK+vry8vL5rN70Z6T9F3C/pmpPdEdICBygWw7+7urq6ubm9vn56e5FQYPk6W8Fpgcuzs7LS0tCQmJgYGBnp6evr6+sbExJSUlCwsLDASgs0FzGpoaABDWVnZP0YqLy9vbm4eHh5eWlq6vLxUi2iBefDw8FBTU2NnZ2cwGKysrAwq4s+UlJSjoyMxkVIIibu7u6UIydvbu7Oz8/HxUQ1v5jF05efng9Xa2trW1lYjb2Njw02E4eDggPxUhIz4+PjgCBZDVmMud6qqqnSAaX57ezs4oJ2GZ2VlTU1NIbxzc3MInZOTE1Xjm5qaShUC7OXlRSSkpqOjo7W1FWEPCwujG1AIu7e3twXLIKvDw0NnZ2fy4dvX1yd6ybC8vOzq6krL8IU12ETdaoAjIyOfn5/pD8Kbnp6OTQcHB3z7+/tFxCArIAlHRkYG8dgPKChWdVdXF07t7e3xzc3NFZvUwPDy/v4e+xSZnZ0VtY2NjWbAdAuKROn09LRwqHOxt7fHUIOAdHNzw1MNMCoUm/R7YmJCgHt6ekzAREVMQkJCpIjUydDUfFBQkIZNAxwRESGhhqFMM7OzuLioGMeDCVj6AYQiOjs703SerJOSkoiKL7JuCezm5lZaWlpcXJyZmeni4iLMOTk56g76F/j6+pqFA0KJXVxcKBYtT0pLSxNd9EANbNnHLNXs7Ozz83OzdpJ+QJuT1dHR8eTk5D2PExISpDs3Nzd/AswWwqKpqUlRNb0ZMBIeHR1NbtD6+rpujgHg5+ensU/R62OMBCy4wyDrjEwCFBYWSvkNDAwob2VJYkWsra2JWxjgaBtLYPQxp+PQ0JCUFTtYfeOZ+nhyclIGE4RRbjwCQYDGFRUViXEVFRWK3gBBGeMnL1ZcMzQUdbO1taWOoqmPkXyGkYkpKCjQ3CqcMDJ7V1dXxQk1cHh4OEJFKURIMp2cnKy+VwzqSI6PjxOYrAEBAZg13d3dmO+xsbFEZejq6+sV80tCAyw66+rqZC719vbKvvZarK6uloK0vBbpa15eHmeTPAoAjJSTLSoqisD0DyMhODiYycaE2NjY4JHZtUgtIyMjHh4e6t6AEYSEMOqOeVXfTpidmBtkxmiTq5fOzc/PSwZhFhta/wVyeno6MzNTW1uLTGMAoeJoBIBXVlYU8zHO+h8cHGQXjY2Nad5r+Dk6OtrW1oZZjWfJ7u6uDrBi3r5cIzfSGPCMXW75GvwUvfu8fTGSZJFdzhpBOvf39zUmfnsjXYOwKQymh8DPSYZ5fHy8+B0aGnp8fKzoPR8/SB960MtlDGxUR1xcnL+/f2Vl5a9BfgJYefObTxEQIoZK/i9p/sRfmF94x/8e4N9LX8D/f+AfLJCSWoHy6t0AAAAASUVORK5CYII=";
let uploadedImage = null;

function actualizarQR() {
    const text = document.getElementById("qrText").value;
    const color = document.getElementById("qrColor").value;
    const bgColor = document.getElementById("bgColor").value;
    const dotStyle = document.getElementById("dotStyle").value;
    const cornerStyle = document.getElementById("cornerStyle").value;
    const size = parseInt(document.getElementById("qrSize").value);
    const switchActive = document.getElementById("mySwitch").checked;

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
    };

    if (switchActive) {
        updateData.image = defaultLogo;
        updateData.imageOptions = {
            crossOrigin: "anonymous",
            margin: 10,
        };
    } else if (uploadedImage) {
        updateData.image = uploadedImage;
        updateData.imageOptions = {
            crossOrigin: "anonymous",
            margin: 10,
        };
    } else {
        updateData.image = ""; // no logo
    }

    qrCode.update(updateData);
}

function handleImageUpload(e) {
    const file = e.target.files[0];

    if (!file) return;

    const reader = new FileReader();
    reader.onload = function (event) {
        uploadedImage = event.target.result;
        document.getElementById("mySwitch").checked = false;
        actualizarQR();
    };
    reader.readAsDataURL(file);
}

function handleSwitchToggle() {
    actualizarQR();
}

function descargarQR() {
    const nombre = prompt("Ingrese el nombre del archivo:", "qr-personalizado");
    if (!nombre) return;

    qrCode.download({
        name: nombre,
        extension: "png",
    });
}
