<template>
	<section id="component">
		<div class="row">
			<div class="col-1"></div>
			<div class="col-7">
				<div class="iframe-container">
					<iframe width="560" height="315" src="https://www.youtube.com/embed/XOacA3RYrXk?autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
				</div>
			</div>
			<div class="col-3" id="commentsCol">
				<div class="row" id="commentsScreen">
					<div v-model="carousel">
						<div class="row" v-for="c in comments" id="com">
							<div class="row">
								<div class="col-2" id="selfie">
									<img src="../assets/selfie.png">
								</div>
								<div class="col-5">
									<h3>{{ c.name }}</h3>
								</div>
							</div>
							<div class="row">
								<h2>{{ c.comment }}</h2>
							</div>
							
							
						</div>
					</div>
				</div>
				<!-- write a comment -->
				<div class="row">
					<div class="col-7" id="commentInput">
						<input placeholder="Write your comment" v-model="message" type="text">
					</div>
					<div class="col-1" id="button">
						<button v-on:click="sendComment">Comment</button>
					</div>
					<div class="col-1"></div>
				</div>
			</div>
		</div>
	</section>
</template>

<style type="text/css">

#component {
	margin-top: 3%;
	overflow-x: hidden;
}

#commentsCol {
	margin-left: 2%;
	border: 2px solid #e83e8c;
	border-radius: 15px;
	padding-right: 1.5%;
}

#commentsCol div {
	margin-top: 1%;
	margin-left: 0%;
}

#commentsScreen {
	max-height: 59vh;
	overflow-y: scroll;
	overflow-x: hidden;
}

#com {
	margin-bottom: 7%;
}

.iframe-container{
	position: relative;
	width: 100%;
	padding-bottom: 56.25%; 
	height: 0;
}
.iframe-container iframe{
	position: absolute;
	top:0;
	left: 0;
	width: 100%;
	height: 100%;
}

#selfie img {
	width: 100%;
}

#commentInput input{
	width: 100%;
	font-size: 15px;
}
#button {
	font-size: 15px;
}

</style>

<script>	
	import Vue from 'vue'

	export default {
		data() {
			return {
				message: '',
				carousel: 0,
				comments: []
			}
		},
		created: function () {
			console.log('created', this);
		},
		mounted: function() {
			this.getComments();
		},
		methods: {
			getComments: function () {
				endpoint = window.endpoint;
				axios.get(endpoint + '/getComments')
					.then((res)=>{
						for(var i = 0; i < res.data.comments.length; i++) {
							Vue.set(this.comments, i, res.data.comments[i]);
						}
						this.randomInterval();
						//this.comments = res.data.comments;
					});
			},
			sendComment: function () {
				var newCom = {
					name: 'Fabio',
					comment: this.message
				}
				this.message = '';
				endpoint = window.endpoint;
				axios.post(endpoint + '/sendComment', newCom)
					.then((res) => {
						var error = res.data.error;
						if (error){
							alert('Error sending the comment');
						} else {
							this.comments.push(newCom);
						}
					});
			},
			randomInterval: function() {
				var self = this;
				setInterval(function(){
					var min = Math.ceil(1);
				    var max = Math.floor(30);
				    var seconds = Math.floor(Math.random() * (max - min + 1)) + min;
				    var randomNum = seconds * 1000;

				    alert(randomNum);

					setTimeout(function(){
						axios.get(endpoint + '/getNewComment')
							.then((res)=>{
								Vue.set(self.comments, self.comments.length, res.data.newComment);
							});
					}, randomNum)
		        }, 30000);
			},
			getRandomInt: function (min, max) {
			    
			    return seconds * 1000;
			}
		}
	}
</script>