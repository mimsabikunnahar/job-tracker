let currentTab = 'all'
const tabActive = ['bg-blue-500', 'text-white']
const tabInactive = ['bg-white', 'text-[#64748B]', 'border-[#64748B]']

// page k dhorbo
const allPage = document.getElementById("all-container");
const interviewPage = document.getElementById("interview-container");
const rejectedPage = document.getElementById("reject-container");
const emptySlate = document.getElementById("empty-slate");
// function section-
function switchTab(btn) {
	const tabs = ['all', 'interview', 'rejected']
 currentTab = btn;
	for (const tab of tabs) {
		const tabName = document.getElementById(`tab-${tab}`)
		if (tab === btn) {
			tabName.classList.remove(...tabInactive)
			tabName.classList.add(...tabActive)
         numUpdate();
		} else {
			tabName.classList.remove(...tabActive)
			tabName.classList.add(...tabInactive)
         numUpdate();
		}
	}
	// page hidden remove > page show
	const pages = [allPage, interviewPage, rejectedPage];
	for (const section of pages) {
		section.classList.add("hidden");
	}
	// empty slate hidden
	emptySlate.classList.add("hidden");

	if (btn === "all") {
		allPage.classList.remove("hidden");
		if (allPage.children.length < 1){
		emptySlate.classList.remove("hidden");	
		}

	}
	else if (btn === "interview") {
		interviewPage.classList.remove("hidden");
          if (interviewPage.children.length < 1){
			emptySlate.classList.remove("hidden");	
		  }
	} else {
		rejectedPage.classList.remove("hidden");
		if (rejectedPage.children.length < 1){
			emptySlate.classList.remove("hidden");	
		}
	}

}

// header card num call
const totalCard = document.getElementById("num-total");
const interviewCard = document.getElementById("num-interview");
const rejectCard = document.getElementById("num-reject");
const availableStat = document.getElementById("available");




switchTab(currentTab);

// event listener add
document.getElementById("jobs-container").addEventListener("click", function (event) {
	const clickedElement = event.target.closest(".interview, .rejected, .delete");
	if (!clickedElement) return;
	const card = clickedElement.closest(".main-card");
	console.log(card);


	if (clickedElement.classList.contains("interview")) {
		interviewPage.appendChild(card);
		// /protibar jeno update hoy 
		// numUpdate();
	}
	if (clickedElement.classList.contains("rejected")) {
		rejectedPage.appendChild(card);
		// protibar jeno update hoy
		// numUpdate();
	}
	if (clickedElement.classList.contains("delete")) {
		card.remove();
		// protibar jeno update hoy
		// numUpdate();
	}
	numUpdate();
});
// header num update
function numUpdate() {
	// totalCard.innerText = allPage.children.length;
	// interviewCard.innerText = interviewPage.children.length;
	// rejectCard.innerText = rejectedPage.children.length;
   const counts = {
	all: allPage.children.length,
	interview : interviewPage.children.length,
	rejected:rejectedPage.children.length,
   
   };
   totalCard.innerText = counts["all"];
   interviewCard.innerText = counts["interview"];
   rejectCard.innerText = counts["rejected"];
  console.log(currentTab);
    availableStat.innerText = counts[currentTab];

	if(counts[currentTab] < 1){
		emptySlate.classList.remove("hidden");
	} else{
		emptySlate.classList.add("hidden");
	}
}
numUpdate();