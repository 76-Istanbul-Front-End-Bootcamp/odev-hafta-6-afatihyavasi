window.mockApiUrl = "https://5ff1a6a5db1158001748b2ca.mockapi.io/pets/";

window.removePet = (id) => {
  fetch(`${window.mockApiUrl}${id}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
    },
  }).then(() => {
    window.location.reload();
  });
};

window.generateDetailModal = (pet) => {
  const petModalHTMl = ` <div class="modal fade" id="exampleModal${pet.id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-modal="true"
         role="dialog">
         <div class="modal-dialog" role="document">
         <div class="modal-content">
         <div class="modal-header">
           <h5 class="modal-title" id="exampleModalLabel">Detay</h5>
           <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
         </div>
         <div class="modal-body">
         <div class="container">
           <div class="row">
               <div class="d-flex flex-column align-items-center">
                <div class="col mb-3"><img src=${pet.image} alt="doggy"></div>
                <div class="col mb-3"><h4>Name: ${pet.name}</h4></div>
                <div class="col mb-3"><h4>Description: ${pet.description}</h4></div>
   
               </div>
           </div>
         <div class="modal-footer">
         <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
       </div>
       
         </div>
     </div>
       <div class="modal-backdrop fade show" id="backdrop" style="display: none;"></div>
       `;
  document.querySelector("body").innerHTML += petModalHTMl;
};

window.openPetDetail = (id) => {
  fetch(`${window.mockApiUrl}${id}`)
    .then((response) => response.json())
    .then((data) => {
      generateDetailModal(data);
      $(`#exampleModal${id}`).modal("show");
    });
};