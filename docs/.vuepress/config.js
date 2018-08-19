module.exports = {
	head: [
    	['link', { rel: 'icon', href: '/logo.png' }]
  	],
	title: 'Cerita Motivasi',
	description: 'Kumpulan Cerita Motivasi Terbaik Untuk Anda',
	themeConfig:{
		// nav:[
		// 	{ text: 'Another Page', link: '/hello.html'}
		// ],
		sidebar:[
			'/content/cerita1',
			'/content/cerita2',
			'/content/cerita3',
			'/content/cerita4',
			'/content/cerita5',
			'/content/cerita6',
			'/content/cerita7',
			'/content/cerita8',
			'/content/cerita9',
			'/content/cerita10',
		]
	},
	markdown: {
    	lineNumbers: true
  	},
}