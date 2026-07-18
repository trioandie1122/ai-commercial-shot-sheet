 alert("Script berjalan");  
const imageInput = document.getElementById("imageInput");
const preview = document.getElementById("preview");
const output = document.getElementById("output");
const button = document.getElementById("generateBtn");

imageInput.addEventListener("change", function(){

    const file = this.files[0];

        if(!file) return;

            const reader = new FileReader();

                reader.onload = function(e){

                        preview.innerHTML = `
                                    <img src="${e.target.result}">
                                            `;

                                                }

                                                    reader.readAsDataURL(file);

                                                    });

                                                    button.addEventListener("click", function(){

                                                        if(imageInput.files.length===0){

                                                                alert("Silakan upload gambar produk terlebih dahulu.");

                                                                        return;

                                                                            }

                                                                                const kategori=document.getElementById("category").value;

                                                                                    output.innerHTML=`
                                                                                    <h3>AI Commercial Shot Sheet</h3>

                                                                                    Kategori :
                                                                                    ${kategori}

                                                                                    Status :
                                                                                    ✅ Gambar berhasil dipilih.

                                                                                    Tahap berikutnya:
                                                                                    Menghubungkan Gemini AI...
                                                                                    `;

                                                                                    });