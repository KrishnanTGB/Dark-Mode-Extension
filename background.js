chrome.runtime.onInstalled.addListener(()=>{
    console.log('Extension has been successfully installed');
});

chrome.bookmarks.onCreated.addListener(() => {
    alert('Bookmark saved');
})