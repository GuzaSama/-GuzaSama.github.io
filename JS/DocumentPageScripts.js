let CurrentSlide = 1;
let NumOfSlides = 2;
PrintSlide(1);
function PrintSlide(CurrentSlide) //Handles the actual switching of the slides
{
  document.getElementById('slide' + CurrentSlide).style.visibility = "visible"; //Makes the current slide visible
  for(let i = 1; i <= NumOfSlides; i++) //Hides all of the other slides
  {
    if(i == CurrentSlide)
    {

    }
    else
    {
      document.getElementById('slide' + i).style.visibility = 'hidden';
    }
  }
}
function NextSlide()
{
  CurrentSlide++;
  if(CurrentSlide > NumOfSlides)
  {
    CurrentSlide = 1;
  }
  PrintSlide(CurrentSlide);
}
function PreviousSlide()
{
  CurrentSlide--;
  if(CurrentSlide < 1)
  {
    CurrentSlide = NumOfSlides;
  }
  PrintSlide(CurrentSlide);
}