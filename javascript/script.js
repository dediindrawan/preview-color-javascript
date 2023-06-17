const colorPreview = document.querySelector('.color-preview');
const btnChecker = document.querySelectorAll('button');
const btnReset = document.querySelector('.btn-reset');
const container = document.querySelector('.container');

btnChecker.forEach(btn => {
    btn.addEventListener('click', () => {
        if (btn.textContent == 'Primary') {
            colorPreview.style.background = 'rgb(179, 111, 200)';
            colorPreview.style.color = 'rgb(40, 44, 52)';
            colorPreview.textContent = btn.textContent;
            container.style.borderColor = 'rgb(179, 111, 200)';
        }

        if (btn.textContent == 'Secondary') {
            colorPreview.style.background = 'rgb(104, 113, 122)';
            colorPreview.style.color = 'rgb(40, 44, 52)';
            colorPreview.textContent = btn.textContent;
            container.style.borderColor = 'rgb(104, 113, 122)';
        }

        if (btn.textContent == 'Warning') {
            colorPreview.style.background = 'rgb(194, 144, 97)';
            colorPreview.style.color = 'rgb(40, 44, 52)';
            colorPreview.textContent = btn.textContent;
            container.style.borderColor = 'rgb(194, 144, 97)';
        }

        if (btn.textContent == 'Success') {
            colorPreview.style.background = 'rgb(152, 195, 121)';
            colorPreview.style.color = 'rgb(40, 44, 52)';
            colorPreview.textContent = btn.textContent;
            container.style.borderColor = 'rgb(152, 195, 121)';
        }

        if (btn.textContent == 'Danger') {
            colorPreview.style.background = 'rgb(173, 90, 99)';
            colorPreview.style.color = 'rgb(40, 44, 52)';
            colorPreview.textContent = btn.textContent;
            container.style.borderColor = 'rgb(173, 90, 99)';
        }

        if (btn.textContent == 'Info') {
            colorPreview.style.background = 'rgb(86, 182, 194)';
            colorPreview.style.color = 'rgb(40, 44, 52)';
            colorPreview.textContent = btn.textContent;
            container.style.borderColor = 'rgb(86, 182, 194)';
        }

        if (btn.textContent == 'White') {
            colorPreview.style.background = 'rgb(171, 178, 191)';
            colorPreview.style.color = 'rgb(40, 44, 52)';
            colorPreview.textContent = btn.textContent;
            container.style.borderColor = 'rgb(171, 178, 191)';
        };
    });
});

btnReset.addEventListener('click', () => {
    colorPreview.style.background = 'transparent';
    colorPreview.style.color = 'rgb(104, 113, 122)';
    colorPreview.textContent = 'Color Preview Here';
    container.style.borderColor = 'rgba(75, 85, 95, 0.2)';
});