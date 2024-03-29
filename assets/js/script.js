

const Toast = Swal.mixin({
		  toast: true,
		  position: 'center',
		  showConfirmButton: false,
		  timer: 3000
		}
		)
				
//player object
let player ={
	character : $('#player'),
	playerPos : 0 
}

//ai object
let ai ={
	character : $('#ai'),
	aiPos : 0 
}

let playerPosition = 0;
let aiPosition = 0;
let line = $('.line').position()
	line = line.left
// console.log(line)
let speed = 100;
let def = 100;

$('#easy').click(function(){
	speed = 100;
	$('#level').html('Easy Level');
	$('#level').removeClass('text-success text-primary text-danger');
	$('#level').addClass('text-success');
})

$('#medium').click(function(){
	speed = 150;
	$('#level').html('Medium Level');
	$('#level').removeClass('text-success text-primary text-danger');
	$('#level').addClass('text-primary');

})
$('#hard').click(function(){
	speed = 200;
	$('#level').html('Hard Level');
	$('#level').removeClass('text-success text-primary text-danger');
	$('#level').addClass('text-danger');
	
})


$('#tap').click(function(){
	if($(this).hasClass('active')){
    	playerAnimate()
    }

})
 // console.log(result())

const result = () =>{
	if(player.playerPos >= line){
		Toast.fire({
		  type: 'success',
		  title: 'YOU WON',
		  imageUrl: 'https://lipis.github.io/bootstrap-sweetalert/assets/thumbs-up.jpg',
		  imageClass: 'alertImg'
		})
		ai.character.stop()
		return true;
		
	}
	if(ai.aiPos >= line){
		Toast.fire({
		  type: 'success',
		  title: 'AI WON',
		  imageUrl: 'https://lipis.github.io/bootstrap-sweetalert/assets/thumbs-up.jpg',
			imageClass: 'alertImg'
		})
		player.character.stop()
		return true;
		
	}


}


$('#start').click(function(){
	animeMe()

})

$('#stop').click(function(){
	ai.character.stop()
	player.character.stop()
	resetGame()
	return;
})

function animeMe(){
		ai.character.animate({
			'left': (aiPosition += speed) + 'px'
		},
		{
			duration: 1500,
			complete: function(){
				if(aiPosition <= 1000){
					animeMe();
				}
			}
		}
		)
		ai.aiPos = aiPosition
		result()

}

function playerAnimate(){
	$('#tap').removeClass('active')

	player.character.animate({
		'left': (playerPosition += def) + 'px'
	},500, function(){
			$('#tap').addClass('active')
		}
	)
	player.playerPos = playerPosition
	result()
}

function resetGame(){
	location.reload();
	return;
}



