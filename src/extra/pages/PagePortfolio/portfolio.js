function test() {
    fetch('/extra/csv/images.csv')
        .then(response => response.text())
        .then(data => {
            const rows = data.split('\n');
            const imageWrapper = document.querySelector('.image-wrapper');
            rows.forEach(row => {
                const columns = row.split(',');
                const imageAddress = columns[0];
                const locatie = columns[1];
                const datum = columns[2];
                const tijd = columns[3];
                const resolutie = columns[4];
                const formaat = columns[5];
                const bit = columns[7];
                const body = columns[8];
                const lens = columns[9];
                const focallength = columns[10];
                const aperture = columns[11];
                const shutterspeed = columns[12];
                const iso = columns[13];
                const imageAddress2 = columns[14];
                const imageLink = document.createElement('a');
                imageLink.className = 'image-link';
                imageLink.onclick = function() {
                    const dialog = document.createElement('dialog');
                    dialog.id = `dialog-${imageAddress2}`;

                    const popupImage = document.createElement('img');
                    popupImage.src = imageAddress2;

                    const popupText = document.createElement('p');
                    popupText.innerHTML += `Details:<br>
                                            • ${datum} | ${tijd}<br>
                                            • ${locatie}<br><br>
                                            • ${body}<br>
                                            • ${lens}<br>
                                            • ${resolutie} <br>
                                            • ${formaat} 
                                            • ${bit}<br>
                                            • ${focallength} <br> 
                                            • ${aperture}<br>
                                            • ${shutterspeed}<br>
                                            • ${iso}<br>`;

                    const closeButton = document.createElement('img');
                    closeButton.src = '/extra/images/close2.png';
                    closeButton.onclick = function() {
                        document.body.style.overflow = 'auto';
                        dialog.close();
                    };
                    closeButton.classList.add('close-button');

                    const downloadButton = document.createElement('a');
                    downloadButton.href = imageAddress2;
                    downloadButton.download = imageAddress2.split('/').pop();
                    downloadButton.innerHTML = '<img src="/extra/images/download.png" alt="Download" class="download-button"/>';

                    const myMessage = "Hey, check out this amazing photo I found!";
                    const shareButton = document.createElement('a');
                    shareButton.href = `whatsapp://send?text=${encodeURIComponent(`${myMessage}\n\n${imageAddress2}`)}`;
                    shareButton.innerHTML = '<img src="/extra/images/whatsapp.png" alt="Share on WhatsApp" class="share-button"/>';

                    dialog.appendChild(popupImage);
                    dialog.appendChild(popupText);
                    dialog.appendChild(closeButton);
                    dialog.appendChild(downloadButton);
                    dialog.appendChild(shareButton);

                    document.body.appendChild(dialog);
                    document.body.style.overflow = 'hidden';
                    dialog.showModal();
                };

                const image = document.createElement('img');
                image.src = imageAddress;
                image.style.width = '32.65vw';
                image.style.height = 'auto';
                imageLink.appendChild(image);
                imageWrapper.appendChild(imageLink);
            });
        });
}
