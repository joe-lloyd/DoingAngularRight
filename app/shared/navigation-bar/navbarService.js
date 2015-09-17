angular.module('navbarService', [])

.factory('navbarFactory', [function(){
	return{
		getNavbarHeadings: function(){
			var headings = [
			{
				title: 'About'
			},{
				title: 'Services'
			},{
				title: 'Contact'
			}
			];
			return headings;
		}
	};
}])