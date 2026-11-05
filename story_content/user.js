function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5anvLEsymxY":
        Script1();
        break;
  }
}

function Script1()
{
  var audio = document.getElementById('bgSongku');
audio.src="musiklatar.mp3";
audio.load();
audio.play();
audio.volume=0.5;
}

