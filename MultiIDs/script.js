// script.js
const ids = Array.from({ length: 20 }, (_, i) => `ID-${i + 1}`);
let selectedIDs = new Set();

document.addEventListener('DOMContentLoaded', () => {
    populateIDList(ids);
});

function populateIDList(idArray) {
    const idList = document.getElementById('idListContainer');
    idList.innerHTML = '';
    // idArray.forEach(id => {
    //     const li = document.createElement('li');
    //     li.textContent = id;
    //     li.onclick = () => toggleSelectID(id, li);
    //     idList.appendChild(li);
    // });

    for(let i=0; i<5; i++) {
        const el1 = document.createElement('input');
        el1.type = 'checkbox';
        el1.id = 'vehicle'+i;
        el1.value = 'Bike_'+i;
        const el1la = document.createElement('label');
        el1la.for = 'vehicle'+i;
        el1la.innerText = 'I have two bikes' + i;
        idList.appendChild(el1);
        idList.appendChild(el1la);
        const br = document.createElement('br');
        idList.appendChild(br);

        // event listener
        el1.onclick = () => toggleSelectID(el1.id, el1);
        
    }
}

function filterIDs() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    console.log('Entered value : '+searchInput);
    const filteredIDs = ids.filter(id => id.toLowerCase().includes(searchInput));
    populateIDList(filteredIDs);
}

function toggleSelectID(id, element) {
    if (selectedIDs.has(id)) {
        selectedIDs.delete(id);
        element.classList.remove('selected');
    } else {
        selectedIDs.add(id);
        element.classList.add('selected');
    }
}

function submitSelectedIDs() {
    const selectedIdsDiv = document.getElementById('selectedIds');
    selectedIdsDiv.innerHTML = `<p>Selected IDs: ${Array.from(selectedIDs).join(', ')}</p>`;
}
