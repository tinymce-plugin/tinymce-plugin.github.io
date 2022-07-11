
const autoIframeHeight = (that)=>{

  that.contentWindow.TimeID = that.contentWindow.setInterval(()=>{
      if(that&&that.contentWindow&&that.contentWindow.document&&that.height<that.contentWindow.document.body.scrollHeight){
        that.height = that.contentWindow.document.body.scrollHeight
      }else{
        that.contentWindow.clearInterval(that.contentWindow.TimeID)
      }
  },100)
}