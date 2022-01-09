let etapas = [
	{
		titulo: 'VEREADOR',
		numeros: 5, // quantidades de quadrados para digitar os números na urna
		candidatos: [
			{
				numero: '11111',
				nome: 'HULK',
				partido: 'H',
				fotos: [
					{
						url: 'img/hulk1.jpg', 
						legenda: 'Vereador', 
						small: false, // quando FALSE, não reduz o tamanho da foto definida no CSS
					} 
				]
			},
			{
				numero: '22222',
				nome: 'HOMEM ARANHA',
				partido: 'HA',
				fotos: [
					{
						url: 'img/homemAranha1.jpeg', 
						legenda: 'Vereador',
					}
				]
			},
			{
				numero: '33333',
				nome: 'CAPITÃO AMÉRICA',
				partido: 'CA',
				fotos: [
					{
						url: 'img/capitaoAmerica1.jpg', 
						legenda: 'Vereador',
					}
				]
			},
			{
				numero: '44444',
				nome: 'THOR',
				partido: 'TH',
				fotos: [
					{
						url: 'img/thor1.jpeg', 
						legenda: 'Vereador',
					}
				]
			},
		]
	},
	{
		titulo: 'PREFEITO',
		numeros: 2,
		candidatos: [
			{
				numero: '11',
				nome: 'Eliel',
				partido: 'LR',
				vice: 'Rafhaelle',
				fotos: [
					{
						url: 'img/elielPrefeito.jpg',
						legenda: 'Prefeito',
					},
					{
						url: 'img/rafhaVice.jpg',
						legenda: 'Vice-Prefeito',
						small: true,
					},
				]
			},
			{
				numero: '22',
				nome: 'Mateus',
				partido: 'MG',
				vice: 'Gregory',
				fotos: [
					{
						url: 'img/mateusPrefeito.jpg',
						legenda: 'Prefeito',
					},
					{
						url: 'img/GregoryVice.jpeg',
						legenda: 'Vice-Prefeito',
						small: true,
					},
				]
			},
			{
				numero: '33',
				nome: 'Felipe',
				partido: 'FL',
				vice: 'Luan',
				fotos: [
					{
						url: 'img/felipePrefeito.jpg',
						legenda: 'Prefeito',
					},
					{
						url: 'img/luanVice.jpg',
						legenda: 'Vice-Prefeito',
						small: true,
					},
				]
			},
		]
	}
];