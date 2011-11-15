describe('Using ID', function() {

	beforeEach(function() {
		$('body').append('<div id="star"></div>');
	});

	afterEach(function() {
		$('#star').remove();
	});

	it('should chainable', function() {
		// given
		var $star		= $('#star'),
			className	= 'my-class';

		// when
		$star.raty().addClass(className);

		// then
	    expect($star).toHaveClass(className);
	});

	it('should change the path', function() {
		// given
		var $star = $('#star');

		// when
		$star.raty({ path: '../img' });

		var $imgs = $star.children('img');

		// then
	    expect($imgs.eq(0)).toHaveAttr('src', '../img/star-off.png');
	    expect($imgs.eq(1)).toHaveAttr('src', '../img/star-off.png');
	    expect($imgs.eq(2)).toHaveAttr('src', '../img/star-off.png');
	    expect($imgs.eq(3)).toHaveAttr('src', '../img/star-off.png');
	    expect($imgs.eq(4)).toHaveAttr('src', '../img/star-off.png');
	});

	it('should create the default stars', function() {
		// given
		var $star = $('#star');

		// when
		$star.raty();

		var $imgs = $star.children('img');

		// then
	    expect($imgs.eq(0)).toHaveClass('star');
	    expect($imgs.eq(1)).toHaveClass('star');
	    expect($imgs.eq(2)).toHaveClass('star');
	    expect($imgs.eq(3)).toHaveClass('star');
	    expect($imgs.eq(4)).toHaveClass('star');

	    expect($imgs.eq(0)).toHaveId('star-1');
	    expect($imgs.eq(1)).toHaveId('star-2');
	    expect($imgs.eq(2)).toHaveId('star-3');
	    expect($imgs.eq(3)).toHaveId('star-4');
	    expect($imgs.eq(4)).toHaveId('star-5');

	    expect($imgs.eq(0)).toHaveAttr('title', 'bad');
	    expect($imgs.eq(1)).toHaveAttr('title', 'poor');
	    expect($imgs.eq(2)).toHaveAttr('title', 'regular');
	    expect($imgs.eq(3)).toHaveAttr('title', 'good');
	    expect($imgs.eq(4)).toHaveAttr('title', 'gorgeous');

	    expect($imgs.eq(0)).toHaveAttr('src', 'img/star-off.png');
	    expect($imgs.eq(1)).toHaveAttr('src', 'img/star-off.png');
	    expect($imgs.eq(2)).toHaveAttr('src', 'img/star-off.png');
	    expect($imgs.eq(3)).toHaveAttr('src', 'img/star-off.png');
	    expect($imgs.eq(4)).toHaveAttr('src', 'img/star-off.png');

	    expect($star.children('input').val()).toEqual('');
	});

	it('should create 7 stars', function() {
		// given
		var $star = $('#star');

		// when
		$star.raty({ number: 7 });

		var $imgs = $star.children('img');

		// then
	    expect($imgs.eq(0)).toHaveClass('star');
	    expect($imgs.eq(1)).toHaveClass('star');
	    expect($imgs.eq(2)).toHaveClass('star');
	    expect($imgs.eq(3)).toHaveClass('star');
	    expect($imgs.eq(4)).toHaveClass('star');
	    expect($imgs.eq(5)).toHaveClass('star');
	    expect($imgs.eq(6)).toHaveClass('star');

	    expect($imgs.eq(0)).toHaveId('star-1');
	    expect($imgs.eq(1)).toHaveId('star-2');
	    expect($imgs.eq(2)).toHaveId('star-3');
	    expect($imgs.eq(3)).toHaveId('star-4');
	    expect($imgs.eq(4)).toHaveId('star-5');
	    expect($imgs.eq(5)).toHaveId('star-6');
	    expect($imgs.eq(6)).toHaveId('star-7');

	    expect($imgs.eq(0)).toHaveAttr('title', 'bad');
	    expect($imgs.eq(1)).toHaveAttr('title', 'poor');
	    expect($imgs.eq(2)).toHaveAttr('title', 'regular');
	    expect($imgs.eq(3)).toHaveAttr('title', 'good');
	    expect($imgs.eq(4)).toHaveAttr('title', 'gorgeous');
	    expect($imgs.eq(5)).toHaveAttr('title', '6');
	    expect($imgs.eq(6)).toHaveAttr('title', '7');

	    expect($imgs.eq(0)).toHaveAttr('src', 'img/star-off.png');
	    expect($imgs.eq(1)).toHaveAttr('src', 'img/star-off.png');
	    expect($imgs.eq(2)).toHaveAttr('src', 'img/star-off.png');
	    expect($imgs.eq(3)).toHaveAttr('src', 'img/star-off.png');
	    expect($imgs.eq(4)).toHaveAttr('src', 'img/star-off.png');
	    expect($imgs.eq(5)).toHaveAttr('src', 'img/star-off.png');
	    expect($imgs.eq(6)).toHaveAttr('src', 'img/star-off.png');
	});

	it('should create the score field', function() {
		// given
		var $star = $('#star');

		// when
		$star.raty();

		var $score = $star.children('input');

		// then
	    expect($score).toHaveId('star-score');
	    expect($score).toHaveAttr('type', 'hidden');
	    expect($score).toHaveAttr('name', 'score');
	    expect($score).toHaveValue(0);
	});

	it('should create a custom score name field', function() {
		// given
		var $star = $('#star');

		// when
		$star.raty({ scoreName: 'entity.score' });

		var $score = $star.children('input');

		// then
		expect($score).toHaveId('star-score');
		expect($score).toHaveAttr('type', 'hidden');
		expect($score).toHaveAttr('name', 'entity.score');
		expect($score).toHaveValue(0);
	});

	it('should be readonly with not rated yet message', function() {
		// given
		var $star = $('#star');

		// when
		$star.raty({ readOnly: true });

		var $imgs = $star.children('img');

		// then
	    expect($imgs.eq(0)).toHaveAttr('title', 'not rated yet');
	    expect($imgs.eq(1)).toHaveAttr('title', 'not rated yet');
	    expect($imgs.eq(2)).toHaveAttr('title', 'not rated yet');
	    expect($imgs.eq(3)).toHaveAttr('title', 'not rated yet');
	    expect($imgs.eq(4)).toHaveAttr('title', 'not rated yet');
	});

	it('should be started with 3 stars', function() {
		// given
		var $star = $('#star');

		// when
		$star.raty({ start: 3 });

		var $imgs = $star.children('img');

		// then
		expect($imgs.eq(0)).toHaveAttr('src', 'img/star-on.png');
		expect($imgs.eq(1)).toHaveAttr('src', 'img/star-on.png');
		expect($imgs.eq(2)).toHaveAttr('src', 'img/star-on.png');
		expect($imgs.eq(3)).toHaveAttr('src', 'img/star-off.png');
		expect($imgs.eq(4)).toHaveAttr('src', 'img/star-off.png');
	});

	it('should be started with 3 stars and readOnly', function() {
		// given
		var $star = $('#star');

		// when
		$star.raty({ readOnly: true, start: 3});

		var $imgs = $star.children('img');

		// then
		expect($imgs.eq(0)).toHaveAttr('title', 'regular');
	    expect($imgs.eq(1)).toHaveAttr('title', 'regular');
	    expect($imgs.eq(2)).toHaveAttr('title', 'regular');
	    expect($imgs.eq(3)).toHaveAttr('title', 'regular');
	    expect($imgs.eq(4)).toHaveAttr('title', 'regular');

		expect($imgs.eq(0)).toHaveAttr('src', 'img/star-on.png');
		expect($imgs.eq(1)).toHaveAttr('src', 'img/star-on.png');
		expect($imgs.eq(2)).toHaveAttr('src', 'img/star-on.png');
		expect($imgs.eq(3)).toHaveAttr('src', 'img/star-off.png');
		expect($imgs.eq(4)).toHaveAttr('src', 'img/star-off.png');
	});

	it('should be hovered 2 stars', function() {
		// given
		var $star = $('#star');

		// when
		$star.raty();

		var $imgs = $star.children('img');

		$imgs.eq(1).mouseover();

		// then
		expect($imgs.eq(0)).toHaveAttr('src', 'img/star-on.png');
		expect($imgs.eq(1)).toHaveAttr('src', 'img/star-on.png');
		expect($imgs.eq(2)).toHaveAttr('src', 'img/star-off.png');
		expect($imgs.eq(3)).toHaveAttr('src', 'img/star-off.png');
		expect($imgs.eq(4)).toHaveAttr('src', 'img/star-off.png');
	});

	it('should be clicked 2 stars', function() {
		// given
		var $star = $('#star');

		// when
		$star.raty();

		var $imgs = $star.children('img');

		$imgs.eq(1).mouseover().click().mouseout();

		// then
		expect($imgs.eq(0)).toHaveAttr('src', 'img/star-on.png');
		expect($imgs.eq(1)).toHaveAttr('src', 'img/star-on.png');
		expect($imgs.eq(2)).toHaveAttr('src', 'img/star-off.png');
		expect($imgs.eq(3)).toHaveAttr('src', 'img/star-off.png');
		expect($imgs.eq(4)).toHaveAttr('src', 'img/star-off.png');

		expect($star.children('input')).toHaveValue(2);
	});

	it('should not be hovered with readOnly', function() {
		// given
		var $star = $('#star');

		// when
		$star.raty({ readOnly: true });

		var $imgs = $star.children('img');

		$imgs.eq(1).mouseover();

		// then
		expect($imgs.eq(0)).toHaveAttr('src', 'img/star-off.png');
		expect($imgs.eq(1)).toHaveAttr('src', 'img/star-off.png');
		expect($imgs.eq(2)).toHaveAttr('src', 'img/star-off.png');
		expect($imgs.eq(3)).toHaveAttr('src', 'img/star-off.png');
		expect($imgs.eq(4)).toHaveAttr('src', 'img/star-off.png');
	});

	it('should not be clicked with readOnly', function() {
		// given
		var $star = $('#star');

		// when
		$star.raty({ readOnly: true });

		var $imgs = $star.children('img');

		$imgs.eq(1).mouseover().click().mouseout();

		// then
		expect($imgs.eq(0)).toHaveAttr('src', 'img/star-off.png');
		expect($imgs.eq(1)).toHaveAttr('src', 'img/star-off.png');
		expect($imgs.eq(2)).toHaveAttr('src', 'img/star-off.png');
		expect($imgs.eq(3)).toHaveAttr('src', 'img/star-off.png');
		expect($imgs.eq(4)).toHaveAttr('src', 'img/star-off.png');

		expect($star.children('input').val()).toEqual('');
	});

	it('should execute click callback', function() {
		// given
		var $star = $('#star');

		// when
		$star.raty({
			click: function(score, evt) {
				$(this).attr('title', score);
			}
		});

		$star.children('img').eq(3).mouseover().click().mouseout();

		// then
		expect($star).toHaveAttr('title', 4);
	});

	it('should have this as self element', function() {
		// given
		var $star = $('#star');

		// when
		$star.raty({
			click: function(score, evt) {
				var $this = $(this);
				$this.attr('title', score);
			}
		});

		$star.children('img').eq(3).mouseover().click().mouseout();

		// then
		expect($star).toHaveAttr('title', 4);
	});

	it('should create default cancel button', function() {
		// given
		var $star = $('#star');

		// when
		$star.raty({ cancel: true });

		var $cancel = $star.children('img:first');
		
		// then
		expect($cancel).not.toHaveAttr('id');
		expect($cancel).toHaveClass('button-cancel');
		expect($cancel).toHaveAttr('title', 'cancel this rating!');
		expect($cancel).toHaveAttr('alt', 'x');
		expect($cancel).toHaveAttr('src', 'img/cancel-off.png');
	});

	it('should change cancel off button', function() {
		// given
		var $star = $('#star');

		// when
		$star.raty({ cancel: true, cancelOff: 'new-cancel-off.png' });

		var $cancel = $star.children('img:first');

		// then
		expect($cancel).not.toHaveAttr('id');
		expect($cancel).toHaveClass('button-cancel');
		expect($cancel).toHaveAttr('title', 'cancel this rating!');
		expect($cancel).toHaveAttr('alt', 'x');
		expect($cancel).toHaveAttr('src', 'img/new-cancel-off.png');
	});

	it('should change cancel on button', function() {
		// given
		var $star = $('#star');

		// when
		$star.raty({ cancel: true, cancelOn: 'new-cancel-on.png' });

		var $cancel = $star.children('img:first').mouseover();

		// then
		expect($cancel).not.toHaveAttr('id');
		expect($cancel).toHaveClass('button-cancel');
		expect($cancel).toHaveAttr('title', 'cancel this rating!');
		expect($cancel).toHaveAttr('alt', 'x');
		expect($cancel).toHaveAttr('src', 'img/new-cancel-on.png');
	});

	it('should turn off the stars on mouseover on cancel button', function() {
		// given
		var $star	= $('#star').raty({ start: 3, cancel: true }),
			$imgs	= $star.children('img');
		
		// when
		$star.children('img:first').mouseover();

		// then
		expect($imgs.eq(1)).toHaveAttr('src', 'img/star-off.png');
		expect($imgs.eq(2)).toHaveAttr('src', 'img/star-off.png');
		expect($imgs.eq(3)).toHaveAttr('src', 'img/star-off.png');
		expect($imgs.eq(4)).toHaveAttr('src', 'img/star-off.png');
		expect($imgs.eq(5)).toHaveAttr('src', 'img/star-off.png');
	});

	it('should cancel the rating', function() {
		// given
		var $star	= $('#star').raty({ start: 5, cancel: true }),
			$imgs	= $star.children('img');
		// when
		$star.children('img:first').mouseover().click().mouseout();

		// then
		expect($imgs.eq(1)).toHaveAttr('src', 'img/star-off.png');
		expect($imgs.eq(2)).toHaveAttr('src', 'img/star-off.png');
		expect($imgs.eq(3)).toHaveAttr('src', 'img/star-off.png');
		expect($imgs.eq(4)).toHaveAttr('src', 'img/star-off.png');
		expect($imgs.eq(5)).toHaveAttr('src', 'img/star-off.png');
	});

	it('should create right cancel button', function() {
		// given
		var $star = $('#star');

		// when
		$star.raty({ cancel: true, cancelPlace: 'right' });

		var $cancel = $star.children('img:last');

		// then
		expect($cancel).not.toHaveAttr('id');
		expect($cancel).toHaveClass('button-cancel');
		expect($cancel).toHaveAttr('title', 'cancel this rating!');
		expect($cancel).toHaveAttr('alt', 'x');
		expect($cancel).toHaveAttr('src', 'img/cancel-off.png');
	});

	it('should set hint for cancel button', function() {
		// given
		var $star	= $('#star'),
			hint	= 'remove my rating!';

		// when
		$star.raty({ cancel: true, cancelHint: hint });

		var $cancel = $star.children('img:first');

		// then
		expect($cancel).not.toHaveAttr('id');
		expect($cancel).toHaveClass('button-cancel');
		expect($cancel).toHaveAttr('title', hint);
		expect($cancel).toHaveAttr('alt', 'x');
		expect($cancel).toHaveAttr('src', 'img/cancel-off.png');
	});

	it('should execute cancel click callback', function() {
		// given
		var $star = $('#star').raty({ cancel: true, click: function(score, evt) { $(this).attr('title', score); } });

		// when
		$star.children('img:first').mouseover().click().mouseout();

		// then
		expect($star).toHaveAttr('title', null);
		expect($star.children('input').val()).toEqual('');
	});

	it('should round down on max limit down with no half and halfShow', function() {
		// given
		var $star = $('#star');

		// when
		$star.raty({ half: false, halfShow: false, start: 1.5 });

		var $imgs = $star.children('img');

		// then
		expect($imgs.eq(0)).toHaveAttr('src', 'img/star-on.png');
	    expect($imgs.eq(1)).toHaveAttr('src', 'img/star-off.png');
	    expect($imgs.eq(2)).toHaveAttr('src', 'img/star-off.png');
	    expect($imgs.eq(3)).toHaveAttr('src', 'img/star-off.png');
	    expect($imgs.eq(4)).toHaveAttr('src', 'img/star-off.png');
	});

	it('should round up on min limit up with no half and halfShow', function() {
		// given
		var $star = $('#star');

		// when
		$star.raty({ half: false, halfShow: false, start: 1.6 });

		var $imgs = $star.children('img');

		// then
		expect($imgs.eq(0)).toHaveAttr('src', 'img/star-on.png');
	    expect($imgs.eq(1)).toHaveAttr('src', 'img/star-on.png');
	    expect($imgs.eq(2)).toHaveAttr('src', 'img/star-off.png');
	    expect($imgs.eq(3)).toHaveAttr('src', 'img/star-off.png');
	    expect($imgs.eq(4)).toHaveAttr('src', 'img/star-off.png');
	});

	it('should round down on max limit down with half and halfShow', function() {
		// given
		var $star = $('#star');
		
		// when
		$star.raty({ half: true, halfShow: true, start: 1.25 });
		
		var $imgs = $star.children('img');
		
		// then
		expect($imgs.eq(0)).toHaveAttr('src', 'img/star-on.png');
		expect($imgs.eq(1)).toHaveAttr('src', 'img/star-off.png');
		expect($imgs.eq(2)).toHaveAttr('src', 'img/star-off.png');
		expect($imgs.eq(3)).toHaveAttr('src', 'img/star-off.png');
		expect($imgs.eq(4)).toHaveAttr('src', 'img/star-off.png');
		
		// then
		expect($star).toHaveAttr('title', null);
	});

	it('should show half on min limit half with half and halfShow', function() {
		// given
		var $star = $('#star');
		
		// when
		$star.raty({ half: true, halfShow: true, start: 1.26 });
		
		var $imgs = $star.children('img');
		
		// then
		expect($imgs.eq(0)).toHaveAttr('src', 'img/star-on.png');
		expect($imgs.eq(1)).toHaveAttr('src', 'img/star-half.png');
		expect($imgs.eq(2)).toHaveAttr('src', 'img/star-off.png');
		expect($imgs.eq(3)).toHaveAttr('src', 'img/star-off.png');
		expect($imgs.eq(4)).toHaveAttr('src', 'img/star-off.png');
		
		// then
		expect($star).toHaveAttr('title', null);
	});

	it('should show half on max limit half with half and halfShow', function() {
		// given
		var $star = $('#star');
		
		// when
		$star.raty({ half: true, halfShow: true, start: 1.75 });
		
		var $imgs = $star.children('img');
		
		// then
		expect($imgs.eq(0)).toHaveAttr('src', 'img/star-on.png');
		expect($imgs.eq(1)).toHaveAttr('src', 'img/star-half.png');
		expect($imgs.eq(2)).toHaveAttr('src', 'img/star-off.png');
		expect($imgs.eq(3)).toHaveAttr('src', 'img/star-off.png');
		expect($imgs.eq(4)).toHaveAttr('src', 'img/star-off.png');
		
		// then
		expect($star).toHaveAttr('title', null);
	});

	it('should show round up on min limit up with half and halfShow', function() {
		// given
		var $star = $('#star');
		
		// when
		$star.raty({ half: true, halfShow: true, start: 1.76 });
		
		var $imgs = $star.children('img');
		
		// then
		expect($imgs.eq(0)).toHaveAttr('src', 'img/star-on.png');
		expect($imgs.eq(1)).toHaveAttr('src', 'img/star-on.png');
		expect($imgs.eq(2)).toHaveAttr('src', 'img/star-off.png');
		expect($imgs.eq(3)).toHaveAttr('src', 'img/star-off.png');
		expect($imgs.eq(4)).toHaveAttr('src', 'img/star-off.png');
		
		// then
		expect($star).toHaveAttr('title', null);
	});

	it('should round down on max limit down with half and no halfShow', function() {
		// given
		var $star = $('#star');

		// when
		$star.raty({ half: true, halfShow: false, start: 1.25 });

		var $imgs = $star.children('img');

		// then
		expect($imgs.eq(0)).toHaveAttr('src', 'img/star-on.png');
		expect($imgs.eq(1)).toHaveAttr('src', 'img/star-off.png');
		expect($imgs.eq(2)).toHaveAttr('src', 'img/star-off.png');
		expect($imgs.eq(3)).toHaveAttr('src', 'img/star-off.png');
		expect($imgs.eq(4)).toHaveAttr('src', 'img/star-off.png');
		
		// then
		expect($star).toHaveAttr('title', null);
	});

	it('should round down on min limit half with half and no halfShow', function() {
		// given
		var $star = $('#star');

		// when
		$star.raty({ half: true, halfShow: false, start: 1.26 });

		var $imgs = $star.children('img');

		// then
		expect($imgs.eq(0)).toHaveAttr('src', 'img/star-on.png');
		expect($imgs.eq(1)).toHaveAttr('src', 'img/star-off.png');
		expect($imgs.eq(2)).toHaveAttr('src', 'img/star-off.png');
		expect($imgs.eq(3)).toHaveAttr('src', 'img/star-off.png');
		expect($imgs.eq(4)).toHaveAttr('src', 'img/star-off.png');
		
		// then
		expect($star).toHaveAttr('title', null);
	});

	it('should round up on max limit half with half and no halfShow', function() {
		// given
		var $star = $('#star');
		
		// when
		$star.raty({ half: true, halfShow: false, start: 1.75 });
		
		var $imgs = $star.children('img');
		
		// then
		expect($imgs.eq(0)).toHaveAttr('src', 'img/star-on.png');
		expect($imgs.eq(1)).toHaveAttr('src', 'img/star-on.png');
		expect($imgs.eq(2)).toHaveAttr('src', 'img/star-off.png');
		expect($imgs.eq(3)).toHaveAttr('src', 'img/star-off.png');
		expect($imgs.eq(4)).toHaveAttr('src', 'img/star-off.png');
		
		// then
		expect($star).toHaveAttr('title', null);
	});

	it('should round up on min limit up with half and no halfShow', function() {
		// given
		var $star = $('#star');
		
		// when
		$star.raty({ half: true, halfShow: false, start: 1.76 });
		
		var $imgs = $star.children('img');
		
		// then
		expect($imgs.eq(0)).toHaveAttr('src', 'img/star-on.png');
		expect($imgs.eq(1)).toHaveAttr('src', 'img/star-on.png');
		expect($imgs.eq(2)).toHaveAttr('src', 'img/star-off.png');
		expect($imgs.eq(3)).toHaveAttr('src', 'img/star-off.png');
		expect($imgs.eq(4)).toHaveAttr('src', 'img/star-off.png');
		
		// then
		expect($star).toHaveAttr('title', null);
	});

	it('should round down on max limit down with no half and halfShow', function() {
		// given
		var $star = $('#star');

		// when
		$star.raty({ half: false, halfShow: true, start: 1.25 });

		var $imgs = $star.children('img');

		// then
		expect($imgs.eq(0)).toHaveAttr('src', 'img/star-on.png');
		expect($imgs.eq(1)).toHaveAttr('src', 'img/star-off.png');
		expect($imgs.eq(2)).toHaveAttr('src', 'img/star-off.png');
		expect($imgs.eq(3)).toHaveAttr('src', 'img/star-off.png');
		expect($imgs.eq(4)).toHaveAttr('src', 'img/star-off.png');

		// then
		expect($star).toHaveAttr('title', null);
	});

	it('should show half on min limit half with no half and halfShow', function() {
		// given
		var $star = $('#star');
		
		// when
		$star.raty({ half: false, halfShow: true, start: 1.26 });
		
		var $imgs = $star.children('img');
		
		// then
		expect($imgs.eq(0)).toHaveAttr('src', 'img/star-on.png');
		expect($imgs.eq(1)).toHaveAttr('src', 'img/star-half.png');
		expect($imgs.eq(2)).toHaveAttr('src', 'img/star-off.png');
		expect($imgs.eq(3)).toHaveAttr('src', 'img/star-off.png');
		expect($imgs.eq(4)).toHaveAttr('src', 'img/star-off.png');
		
		// then
		expect($star).toHaveAttr('title', null);
	});

	it('should show half on max limit half with no half and halfShow', function() {
		// given
		var $star = $('#star');
		
		// when
		$star.raty({ half: false, halfShow: true, start: 1.75 });
		
		var $imgs = $star.children('img');
		
		// then
		expect($imgs.eq(0)).toHaveAttr('src', 'img/star-on.png');
		expect($imgs.eq(1)).toHaveAttr('src', 'img/star-half.png');
		expect($imgs.eq(2)).toHaveAttr('src', 'img/star-off.png');
		expect($imgs.eq(3)).toHaveAttr('src', 'img/star-off.png');
		expect($imgs.eq(4)).toHaveAttr('src', 'img/star-off.png');
		
		// then
		expect($star).toHaveAttr('title', null);
	});

	it('should show round up on min limit up with no half and halfShow', function() {
		// given
		var $star = $('#star');
		
		// when
		$star.raty({ half: false, halfShow: true, start: 1.76 });
		
		var $imgs = $star.children('img');
		
		// then
		expect($imgs.eq(0)).toHaveAttr('src', 'img/star-on.png');
		expect($imgs.eq(1)).toHaveAttr('src', 'img/star-on.png');
		expect($imgs.eq(2)).toHaveAttr('src', 'img/star-off.png');
		expect($imgs.eq(3)).toHaveAttr('src', 'img/star-off.png');
		expect($imgs.eq(4)).toHaveAttr('src', 'img/star-off.png');
		
		// then
		expect($star).toHaveAttr('title', null);
	});

	it('should set custom hints', function() {
		// given
		var $star = $('#star');

		// when
		$star.raty({ hintList: ['a', '', null, 'd', '5'] });

		var $imgs = $star.children('img');

		// then
	    expect($imgs.eq(0)).toHaveAttr('title', 'a');
	    expect($imgs.eq(1)).toHaveAttr('title', '');
	    expect($imgs.eq(2)).toHaveAttr('title', 3);
	    expect($imgs.eq(3)).toHaveAttr('title', 'd');
	    expect($imgs.eq(4)).toHaveAttr('title', '5');
	});

	it('should change the star off', function() {
		// given
		var $star = $('#star');

		// when
		$star.raty({ starOff: 'medal-off.png' });

		var $imgs = $star.children('img');

		// then
	    expect($imgs.eq(0)).toHaveAttr('src', 'img/medal-off.png');
	    expect($imgs.eq(1)).toHaveAttr('src', 'img/medal-off.png');
	    expect($imgs.eq(2)).toHaveAttr('src', 'img/medal-off.png');
	    expect($imgs.eq(3)).toHaveAttr('src', 'img/medal-off.png');
	    expect($imgs.eq(4)).toHaveAttr('src', 'img/medal-off.png');
	});

	it('should change the star on', function() {
		// given
		var $star = $('#star');

		// when
		$star.raty({ starOn: 'medal-on.png' });

		var $imgs = $star.children('img');

		$imgs.eq(3).mouseover();

		// then
	    expect($imgs.eq(0)).toHaveAttr('src', 'img/medal-on.png');
	    expect($imgs.eq(1)).toHaveAttr('src', 'img/medal-on.png');
	    expect($imgs.eq(2)).toHaveAttr('src', 'img/medal-on.png');
	    expect($imgs.eq(3)).toHaveAttr('src', 'img/medal-on.png');
	    expect($imgs.eq(4)).toHaveAttr('src', 'img/star-off.png');
	});

	it('should use range icons', function() {
		// given
		var $star = $('#star');

		// when
		$star.raty({
			iconRange: [
	            { range: 2, on: 'face-a.png', off: 'face-a-off.png' },
	            { range: 3, on: 'face-b.png', off: 'face-b-off.png' },
	            { range: 4, on: 'face-c.png', off: 'face-c-off.png' },
	            { range: 5, on: 'face-d.png' }
			],
			starOff: 'face-off.png'
		});

		var $imgs = $star.children('img');

		// then
	    expect($imgs.eq(0)).toHaveAttr('src', 'img/face-a-off.png');
	    expect($imgs.eq(1)).toHaveAttr('src', 'img/face-a-off.png');
	    expect($imgs.eq(2)).toHaveAttr('src', 'img/face-b-off.png');
	    expect($imgs.eq(3)).toHaveAttr('src', 'img/face-c-off.png');
	    expect($imgs.eq(4)).toHaveAttr('src', 'img/face-off.png');
	});

	it('should hover range icons', function() {
		// given
		var $star = $('#star');

		// when
		$star.raty({
			iconRange: [
				{ range: 2, on: 'face-a.png', off: 'face-a-off.png' },
				{ range: 3, on: 'face-b.png', off: 'face-b-off.png' },
				{ range: 4, on: 'face-c.png', off: 'face-c-off.png' },
				{ range: 5, on: 'face-d.png' }
			],
            starOff: 'face-off.png'
		});

		var $imgs = $star.children('img');

		$imgs.eq(4).mouseover();

		// then
		expect($imgs.eq(0)).toHaveAttr('src', 'img/face-a.png');
		expect($imgs.eq(1)).toHaveAttr('src', 'img/face-a.png');
		expect($imgs.eq(2)).toHaveAttr('src', 'img/face-b.png');
		expect($imgs.eq(3)).toHaveAttr('src', 'img/face-c.png');
		expect($imgs.eq(4)).toHaveAttr('src', 'img/face-d.png');
	});

	it('should calculate the right icon size', function() {
		// given
		var $star	= $('#star'),
			size	= 24,
			number	= 5;

		// when
		$star.raty({ size: size });

		// then
		expect($star.width()).toEqual(number * size + number * 4);
	});

	it('should calculate the right icon size with cancel button', function() {
		// given
		var $star	= $('#star'),
			size	= 24,
			number	= 5;

		// when
		$star.raty({ cancel: true, size: size });

		// then
		expect($star.width()).toEqual(number * size + number * 4 + (size + 4));
	});

	it('should set a target on div with mouseover', function() {
		$('body').append('<div id="hint"></div>');

		// given
		var $hint = $('#hint'),
			$star = $('#star').raty({ target: '#hint' });

		// when
		$star.children('img').eq(3).mouseover();

		// then
		expect($hint).toHaveHtml('good');

		$hint.remove();
	});

	it('should set a target on div with mouseover but take off when mouseout', function() {
		$('body').append('<div id="hint"></div>');

		// given
		var $hint = $('#hint'),
			$star = $('#star').raty({ target: '#hint' });

		// when
		$star.children('img').eq(3).mouseover().mouseout();

		// then
		expect($hint).toHaveHtml('');

		$hint.remove();
	});

	it('should set a target on div with mouseover and click but take off when mouseout', function() {
		$('body').append('<div id="hint"></div>');

		// given
		var $hint = $('#hint'),
			$star = $('#star').raty({ target: '#hint' });

		// when
		$star.children('img').eq(3).mouseover().click().mouseout();

		// then
		expect($hint).toHaveHtml('');

		$hint.remove();
	});

	it('should change the cancel hint using target', function() {
		$('body').append('<div id="hint"></div>');

		// given
		var $hint = $('#hint'),
			$star = $('#star').raty({
			cancel:     true,
			cancelHint: 'none',
			target:     '#hint',
		});

		// when
		$star.children('img:first').mouseover();

		// then
		expect($hint).toHaveHtml('none');

		$hint.remove();
	});

	it('should set hint on a combobox element', function() {
		$('body').append('<select id="hint"><option value="">--</option><option value="good">good</option></select>');

		// given
		var $hint = $('#hint'),
			$star = $('#star').raty({ target: '#hint' });

		// when
		$star.children('img').eq(3).mouseover();

		// then
		expect($hint.val()).toEqual('good');

		$hint.remove();
	});

	it('should set hint on a text element', function() {
		$('body').append('<input id="hint" type="text" />');

		// given
		var $hint = $('#hint'),
			$star = $('#star').raty({ target: '#hint' });

		// when
		$star.children('img').eq(3).mouseover();

		// then
		expect($hint.val()).toEqual('good');

		$hint.remove();
	});

	it('should set hint on a textarea element', function() {
		$('body').append('<textarea id="hint"></textarea>');

		// given
		var $hint = $('#hint'),
			$star = $('#star').raty({ target: '#hint' });

		// when
		$star.children('img').eq(3).mouseover();

		// then
		expect($hint.val()).toEqual('good');

		$hint.remove();
	});

	it('should set number hint on a combobox element', function() {
		$('body').append('<select id="hint"><option value="">--</option><option value="4">4</option></select>');

		// given
		var $hint = $('#hint'),
			$star = $('#star').raty({ target: '#hint', targetType: 'number' });

		// when
		$star.children('img').eq(3).mouseover();

		// then
		expect($hint.val()).toEqual('4');

		$hint.remove();
	});

	it('should set number hint and keep it on mouseout', function() {
		$('body').append('<select id="hint"><option value="">--</option><option value="4">4</option></select>');

		// given
		var $hint = $('#hint'),
			$star = $('#star').raty({ target: '#hint', targetType: 'number', targetKeep: true });

		// when
		$star.children('img').eq(3).mouseover().click().mouseout();

		// then
		expect($hint.val()).toEqual('4');

		$hint.remove();
	});

	it('should create stars without space', function() {
		// given
		var $star	= $('#star');
			size	= 16,
			number	= 5;

		// when
		$star.raty({ space: false });

		// then
		expect($star.width()).toEqual(number * size + number * (4 * 0));
	});

	it('should create stars with cancel without space', function() {
		// given
		var $star	= $('#star');
			size	= 16,
			number	= 5;

		// when
		$star.raty({ cancel: true, space: false });

		// then
		expect($star.width()).toEqual(number * size + number * (4 * 0) + 16 + (4 * 0));
	});

	it('should set the target with targetOutValue', function() {
		$('body').append('<div id="hint"></div>');

		// given
		var message	= 'cancel this rating!',
			$hint	= $('#hint'),
			$star	= $('#star').raty({ target: '#hint', targetOutValue: message });

		// when
		$star.children('img').eq(3).mouseover().mouseout();

		// then
		expect($hint).toHaveHtml(message);

		$hint.remove();
	});

	it('should not to set the target with targetOutValue when targetKeep is enabled', function() {
		$('body').append('<div id="hint"></div>');

		// given
		var $hint = $('#hint'),
			$star = $('#star').raty({ target: '#hint', targetKeep: true, targetOutValue: 'cancel this rating!' });

		// when
		$star.children('img').eq(3).mouseover().mouseout();

		// then
		expect($hint).toHaveHtml('good');

		$hint.remove();
	});

});

describe('Using class', function() {

	beforeEach(function() {
		$('body').append('<div class="star"></div><div class="star"></div><div class="star"></div>');
	});

	afterEach(function() {
		$('.star').remove();
	});

	it('should create the default stars', function() {
		// given
		var $stars = $('.star');

		// when
		$stars.raty();

		// then
		var $imgs1 = $stars.eq(0).children('img'),
			$imgs2 = $stars.eq(1).children('img'),
			$imgs3 = $stars.eq(2).children('img');

	    expect($imgs1.eq(0)).toHaveAttr('id');
	    expect($imgs1.eq(1)).toHaveAttr('id');
	    expect($imgs1.eq(2)).toHaveAttr('id');
	    expect($imgs1.eq(3)).toHaveAttr('id');
	    expect($imgs1.eq(4)).toHaveAttr('id');

	    expect($imgs1.eq(0)).toHaveAttr('title', 'bad');
	    expect($imgs1.eq(1)).toHaveAttr('title', 'poor');
	    expect($imgs1.eq(2)).toHaveAttr('title', 'regular');
	    expect($imgs1.eq(3)).toHaveAttr('title', 'good');
	    expect($imgs1.eq(4)).toHaveAttr('title', 'gorgeous');

	    expect($imgs1.eq(0)).toHaveAttr('src', 'img/star-off.png');
	    expect($imgs1.eq(1)).toHaveAttr('src', 'img/star-off.png');
	    expect($imgs1.eq(2)).toHaveAttr('src', 'img/star-off.png');
	    expect($imgs1.eq(3)).toHaveAttr('src', 'img/star-off.png');
	    expect($imgs1.eq(4)).toHaveAttr('src', 'img/star-off.png');

	    expect($imgs2.eq(0)).toHaveAttr('id');
	    expect($imgs2.eq(1)).toHaveAttr('id');
	    expect($imgs2.eq(2)).toHaveAttr('id');
	    expect($imgs2.eq(3)).toHaveAttr('id');
	    expect($imgs2.eq(4)).toHaveAttr('id');

	    expect($imgs2.eq(0)).toHaveAttr('title', 'bad');
	    expect($imgs2.eq(1)).toHaveAttr('title', 'poor');
	    expect($imgs2.eq(2)).toHaveAttr('title', 'regular');
	    expect($imgs2.eq(3)).toHaveAttr('title', 'good');
	    expect($imgs2.eq(4)).toHaveAttr('title', 'gorgeous');

	    expect($imgs2.eq(0)).toHaveAttr('src', 'img/star-off.png');
	    expect($imgs2.eq(1)).toHaveAttr('src', 'img/star-off.png');
	    expect($imgs2.eq(2)).toHaveAttr('src', 'img/star-off.png');
	    expect($imgs2.eq(3)).toHaveAttr('src', 'img/star-off.png');
	    expect($imgs2.eq(4)).toHaveAttr('src', 'img/star-off.png');

	    expect($imgs3.eq(0)).toHaveAttr('id');
	    expect($imgs3.eq(1)).toHaveAttr('id');
	    expect($imgs3.eq(2)).toHaveAttr('id');
	    expect($imgs3.eq(3)).toHaveAttr('id');
	    expect($imgs3.eq(4)).toHaveAttr('id');

	    expect($imgs3.eq(0)).toHaveAttr('title', 'bad');
	    expect($imgs3.eq(1)).toHaveAttr('title', 'poor');
	    expect($imgs3.eq(2)).toHaveAttr('title', 'regular');
	    expect($imgs3.eq(3)).toHaveAttr('title', 'good');
	    expect($imgs3.eq(4)).toHaveAttr('title', 'gorgeous');

	    expect($imgs3.eq(0)).toHaveAttr('src', 'img/star-off.png');
	    expect($imgs3.eq(1)).toHaveAttr('src', 'img/star-off.png');
	    expect($imgs3.eq(2)).toHaveAttr('src', 'img/star-off.png');
	    expect($imgs3.eq(3)).toHaveAttr('src', 'img/star-off.png');
	    expect($imgs3.eq(4)).toHaveAttr('src', 'img/star-off.png');
	});

	it('should select first raty', function() {
		// given
		var $stars = $('.star').raty(),
			$imgs1 = $stars.eq(0).children('img'),
			$imgs2 = $stars.eq(1).children('img'),
			$imgs3 = $stars.eq(2).children('img');

		// when
		$imgs1.eq(3).mouseover();

		// then
	    expect($imgs1.eq(0)).toHaveAttr('src', 'img/star-on.png');
	    expect($imgs1.eq(1)).toHaveAttr('src', 'img/star-on.png');
	    expect($imgs1.eq(2)).toHaveAttr('src', 'img/star-on.png');
	    expect($imgs1.eq(3)).toHaveAttr('src', 'img/star-on.png');
	    expect($imgs1.eq(4)).toHaveAttr('src', 'img/star-off.png');

	    expect($imgs2.eq(0)).toHaveAttr('src', 'img/star-off.png');
	    expect($imgs2.eq(1)).toHaveAttr('src', 'img/star-off.png');
	    expect($imgs2.eq(2)).toHaveAttr('src', 'img/star-off.png');
	    expect($imgs2.eq(3)).toHaveAttr('src', 'img/star-off.png');
	    expect($imgs2.eq(4)).toHaveAttr('src', 'img/star-off.png');

	    expect($imgs3.eq(0)).toHaveAttr('src', 'img/star-off.png');
	    expect($imgs3.eq(1)).toHaveAttr('src', 'img/star-off.png');
	    expect($imgs3.eq(2)).toHaveAttr('src', 'img/star-off.png');
	    expect($imgs3.eq(3)).toHaveAttr('src', 'img/star-off.png');
	    expect($imgs3.eq(4)).toHaveAttr('src', 'img/star-off.png');
	});

	it('should click second raty', function() {
		// given
		var $stars = $('.star').raty(),
			$imgs1 = $stars.eq(0).children('img'),
			$imgs2 = $stars.eq(1).children('img'),
			$imgs3 = $stars.eq(2).children('img');

		// when

		$imgs2.eq(3).mouseover().click().mouseout();

		// then
	    expect($imgs1.eq(0)).toHaveAttr('src', 'img/star-off.png');
	    expect($imgs1.eq(1)).toHaveAttr('src', 'img/star-off.png');
	    expect($imgs1.eq(2)).toHaveAttr('src', 'img/star-off.png');
	    expect($imgs1.eq(3)).toHaveAttr('src', 'img/star-off.png');
	    expect($imgs1.eq(4)).toHaveAttr('src', 'img/star-off.png');

	    expect($imgs2.eq(0)).toHaveAttr('src', 'img/star-on.png');
	    expect($imgs2.eq(1)).toHaveAttr('src', 'img/star-on.png');
	    expect($imgs2.eq(2)).toHaveAttr('src', 'img/star-on.png');
	    expect($imgs2.eq(3)).toHaveAttr('src', 'img/star-on.png');
	    expect($imgs2.eq(4)).toHaveAttr('src', 'img/star-off.png');

	    expect($imgs3.eq(0)).toHaveAttr('src', 'img/star-off.png');
	    expect($imgs3.eq(1)).toHaveAttr('src', 'img/star-off.png');
	    expect($imgs3.eq(2)).toHaveAttr('src', 'img/star-off.png');
	    expect($imgs3.eq(3)).toHaveAttr('src', 'img/star-off.png');
	    expect($imgs3.eq(4)).toHaveAttr('src', 'img/star-off.png');
	});

	it('should click on first and third raty', function() {
		// given
		var $stars = $('.star').raty(),
			$imgs1 = $stars.eq(0).children('img'),
			$imgs2 = $stars.eq(1).children('img'),
			$imgs3 = $stars.eq(2).children('img');

		// when
		$imgs1.eq(3).mouseover().click().mouseout();
		$imgs3.eq(3).mouseover().click().mouseout();

		// then
		expect($imgs1.eq(0)).toHaveAttr('src', 'img/star-on.png');
		expect($imgs1.eq(1)).toHaveAttr('src', 'img/star-on.png');
		expect($imgs1.eq(2)).toHaveAttr('src', 'img/star-on.png');
		expect($imgs1.eq(3)).toHaveAttr('src', 'img/star-on.png');
		expect($imgs1.eq(4)).toHaveAttr('src', 'img/star-off.png');

	    expect($imgs2.eq(0)).toHaveAttr('src', 'img/star-off.png');
	    expect($imgs2.eq(1)).toHaveAttr('src', 'img/star-off.png');
	    expect($imgs2.eq(2)).toHaveAttr('src', 'img/star-off.png');
	    expect($imgs2.eq(3)).toHaveAttr('src', 'img/star-off.png');
	    expect($imgs2.eq(4)).toHaveAttr('src', 'img/star-off.png');

		expect($imgs3.eq(0)).toHaveAttr('src', 'img/star-on.png');
		expect($imgs3.eq(1)).toHaveAttr('src', 'img/star-on.png');
		expect($imgs3.eq(2)).toHaveAttr('src', 'img/star-on.png');
		expect($imgs3.eq(3)).toHaveAttr('src', 'img/star-on.png');
		expect($imgs3.eq(4)).toHaveAttr('src', 'img/star-off.png');
	});

	it('should hover all and out', function() {
		// given
		var $stars = $('.star').raty(),
			$imgs1 = $stars.eq(0).children('img'),
			$imgs2 = $stars.eq(1).children('img'),
			$imgs3 = $stars.eq(2).children('img');

		// when
		$imgs1.eq(1).mouseover().mouseout();
		$imgs2.eq(2).mouseover().mouseout();
		$imgs3.eq(3).mouseover().mouseout();

		// then
		expect($imgs1.eq(0)).toHaveAttr('src', 'img/star-off.png');
		expect($imgs1.eq(1)).toHaveAttr('src', 'img/star-off.png');
		expect($imgs1.eq(2)).toHaveAttr('src', 'img/star-off.png');
		expect($imgs1.eq(3)).toHaveAttr('src', 'img/star-off.png');
		expect($imgs1.eq(4)).toHaveAttr('src', 'img/star-off.png');

	    expect($imgs2.eq(0)).toHaveAttr('src', 'img/star-off.png');
	    expect($imgs2.eq(1)).toHaveAttr('src', 'img/star-off.png');
	    expect($imgs2.eq(2)).toHaveAttr('src', 'img/star-off.png');
	    expect($imgs2.eq(3)).toHaveAttr('src', 'img/star-off.png');
	    expect($imgs2.eq(4)).toHaveAttr('src', 'img/star-off.png');

		expect($imgs3.eq(0)).toHaveAttr('src', 'img/star-off.png');
		expect($imgs3.eq(1)).toHaveAttr('src', 'img/star-off.png');
		expect($imgs3.eq(2)).toHaveAttr('src', 'img/star-off.png');
		expect($imgs3.eq(3)).toHaveAttr('src', 'img/star-off.png');
		expect($imgs3.eq(4)).toHaveAttr('src', 'img/star-off.png');
	});

});

describe('Using function with id', function() {

	beforeEach(function() {
		$('body').append('<div id="star"></div>');
	});

	afterEach(function() {
		$('#star').remove();
	});

	it('should start the start with 3 stars', function() {
		// given
		var $star = $('#star').raty();

		// when
		$star.raty('start', 3);

		// then
		var $imgs = $star.children('img');

	    expect($imgs.eq(0)).toHaveAttr('src', 'img/star-on.png');
	    expect($imgs.eq(1)).toHaveAttr('src', 'img/star-on.png');
	    expect($imgs.eq(2)).toHaveAttr('src', 'img/star-on.png');
	    expect($imgs.eq(3)).toHaveAttr('src', 'img/star-off.png');
	    expect($imgs.eq(4)).toHaveAttr('src', 'img/star-off.png');
	});

	it('should set readOnly', function() {
		// given
		var $star = $('#star').raty();

		// when
		$star.raty('readOnly', true);

		var $imgs = $star.children('img');

		$imgs.eq(3).mouseover().click();

		// then
	    expect($imgs.eq(0)).toHaveAttr('src', 'img/star-off.png');
	    expect($imgs.eq(1)).toHaveAttr('src', 'img/star-off.png');
	    expect($imgs.eq(2)).toHaveAttr('src', 'img/star-off.png');
	    expect($imgs.eq(3)).toHaveAttr('src', 'img/star-off.png');
	    expect($imgs.eq(4)).toHaveAttr('src', 'img/star-off.png');
	});

	it('should unset readOnly', function() {
		// given
		var $star = $('#star').raty();

		// when
		$star.raty('readOnly', true);

		$star.raty('readOnly', false);

		var $imgs = $star.children('img');

		$imgs.eq(1).mouseover().click();

		// then
	    expect($imgs.eq(0)).toHaveAttr('src', 'img/star-on.png');
	    expect($imgs.eq(1)).toHaveAttr('src', 'img/star-on.png');
	    expect($imgs.eq(2)).toHaveAttr('src', 'img/star-off.png');
	    expect($imgs.eq(3)).toHaveAttr('src', 'img/star-off.png');
	    expect($imgs.eq(4)).toHaveAttr('src', 'img/star-off.png');
	});

	it('should cancel without click', function() {
		// given
		var $star = $('#star').raty({ start: 1 });

		// when
		$star.raty('cancel');

		var $imgs = $star.children('img');

		// then
	    expect($imgs.eq(0)).toHaveAttr('src', 'img/star-off.png');
	    expect($imgs.eq(1)).toHaveAttr('src', 'img/star-off.png');
	    expect($imgs.eq(2)).toHaveAttr('src', 'img/star-off.png');
	    expect($imgs.eq(3)).toHaveAttr('src', 'img/star-off.png');
	    expect($imgs.eq(4)).toHaveAttr('src', 'img/star-off.png');

	    expect($star.children('input').val()).toEqual('');
	});

	it('should cancel with click', function() {
		// given
		var $star = $('#star').raty({
			click: function(score, evt) {
				this.attr('title', (score === null) ? 'null' : score);
			},
			start: 1
		});

		// when
		$star.raty('cancel', true);

		var $imgs = $star.children('img');

		// then
	    expect($imgs.eq(0)).toHaveAttr('src', 'img/star-off.png');
	    expect($imgs.eq(1)).toHaveAttr('src', 'img/star-off.png');
	    expect($imgs.eq(2)).toHaveAttr('src', 'img/star-off.png');
	    expect($imgs.eq(3)).toHaveAttr('src', 'img/star-off.png');
	    expect($imgs.eq(4)).toHaveAttr('src', 'img/star-off.png');

	    expect($star).toHaveAttr('title', 'null');
	    expect($star.children('input').val()).toEqual('');
	});

	it('should click the star 3', function() {
		// given
		var $star = $('#star').raty({
			click: function(score, evt) {
				this.attr('title', score);
			}
		});

		// when
		$star.raty('click', 3);

		var $imgs = $star.children('img');

		// then
		expect($imgs.eq(0)).toHaveAttr('src', 'img/star-on.png');
		expect($imgs.eq(1)).toHaveAttr('src', 'img/star-on.png');
		expect($imgs.eq(2)).toHaveAttr('src', 'img/star-on.png');
		expect($imgs.eq(3)).toHaveAttr('src', 'img/star-off.png');
		expect($imgs.eq(4)).toHaveAttr('src', 'img/star-off.png');
		expect($star).toHaveAttr('title', 3);
	});

	it('should set a target on div with mouseover', function() {
		$('body').append('<div id="hint"></div>');

		// given
		var $hint = $('#hint'),
			$star = $('#star').raty({ target: '#hint', targetKeep: true, click: function(score, evt) { } });

		// when
		$star.raty('click', 4);

		// then
		expect($hint).toHaveHtml('good');

		$hint.remove();
	});

	it('should set a target on div with mouseover', function() {
		$('body').append('<div id="hint"></div>');

		// given
		var $hint = $('#hint'),
			$star = $('#star').raty({ target: '#hint', targetKeep: true });

		// when
		$star.raty('start', 4);

		// then
		expect($hint).toHaveHtml('good');

		$hint.remove();
	});

	it('should set a target on div with mouseover', function() {
		$('body').append('<div id="hint"></div>');

		// given
		var $hint = $('#hint'),
			$star = $('#star').raty({ cancel: true, target: '#hint', targetKeep: true });

		// when
		$star.raty('cancel');

		// then
		expect($hint).toHaveHtml('cancel this rating!');

		$hint.remove();
	});

});

describe('Using function with class', function() {
	
	beforeEach(function() {
		$('body').append('<div class="star"></div><div class="star"></div><div class="star"></div>');
	});

	afterEach(function() {
		$('.star').remove();
	});

	it('should start the starts with 3 stars', function() {
		// given
		var $stars = $('.star').raty();

		// when
		$stars.raty('start', 3);

		// then
		var $imgs1 = $stars.eq(0).children('img'),
			$imgs2 = $stars.eq(1).children('img'),
			$imgs3 = $stars.eq(2).children('img');

		expect($imgs1.eq(0)).toHaveAttr('src', 'img/star-on.png');
		expect($imgs1.eq(1)).toHaveAttr('src', 'img/star-on.png');
		expect($imgs1.eq(2)).toHaveAttr('src', 'img/star-on.png');
		expect($imgs1.eq(3)).toHaveAttr('src', 'img/star-off.png');
		expect($imgs1.eq(4)).toHaveAttr('src', 'img/star-off.png');

		expect($imgs2.eq(0)).toHaveAttr('src', 'img/star-on.png');
		expect($imgs2.eq(1)).toHaveAttr('src', 'img/star-on.png');
		expect($imgs2.eq(2)).toHaveAttr('src', 'img/star-on.png');
		expect($imgs2.eq(3)).toHaveAttr('src', 'img/star-off.png');
		expect($imgs2.eq(4)).toHaveAttr('src', 'img/star-off.png');

		expect($imgs3.eq(0)).toHaveAttr('src', 'img/star-on.png');
		expect($imgs3.eq(1)).toHaveAttr('src', 'img/star-on.png');
		expect($imgs3.eq(2)).toHaveAttr('src', 'img/star-on.png');
		expect($imgs3.eq(3)).toHaveAttr('src', 'img/star-off.png');
		expect($imgs3.eq(4)).toHaveAttr('src', 'img/star-off.png');
	});
	
	it('should set readOnly', function() {
		// given
		var $stars = $('.star').raty();

		// when
		$stars.raty('readOnly', true);

		var $imgs1 = $stars.eq(0).children('img'),
			$imgs2 = $stars.eq(1).children('img'),
			$imgs3 = $stars.eq(2).children('img');
	
		$imgs1.eq(3).mouseover().click();
		$imgs2.eq(3).mouseover().click();
		$imgs3.eq(3).mouseover().click();

		// then
		expect($imgs1.eq(0)).toHaveAttr('src', 'img/star-off.png');
		expect($imgs1.eq(1)).toHaveAttr('src', 'img/star-off.png');
		expect($imgs1.eq(2)).toHaveAttr('src', 'img/star-off.png');
		expect($imgs1.eq(3)).toHaveAttr('src', 'img/star-off.png');
		expect($imgs1.eq(4)).toHaveAttr('src', 'img/star-off.png');
	
		expect($imgs2.eq(0)).toHaveAttr('src', 'img/star-off.png');
		expect($imgs2.eq(1)).toHaveAttr('src', 'img/star-off.png');
		expect($imgs2.eq(2)).toHaveAttr('src', 'img/star-off.png');
		expect($imgs2.eq(3)).toHaveAttr('src', 'img/star-off.png');
		expect($imgs2.eq(4)).toHaveAttr('src', 'img/star-off.png');
	
		expect($imgs3.eq(0)).toHaveAttr('src', 'img/star-off.png');
		expect($imgs3.eq(1)).toHaveAttr('src', 'img/star-off.png');
		expect($imgs3.eq(2)).toHaveAttr('src', 'img/star-off.png');
		expect($imgs3.eq(3)).toHaveAttr('src', 'img/star-off.png');
		expect($imgs3.eq(4)).toHaveAttr('src', 'img/star-off.png');
	});

	it('should unset readOnly', function() {
		// given
		var $stars = $('.star').raty();

		// when
		$stars.raty('readOnly', true).raty('readOnly', false);

		var $imgs1 = $stars.eq(0).children('img'),
			$imgs2 = $stars.eq(1).children('img'),
			$imgs3 = $stars.eq(2).children('img');

		$imgs1.eq(3).mouseover().click();
		$imgs2.eq(3).mouseover().click();
		$imgs3.eq(3).mouseover().click();

		// then
		expect($imgs1.eq(0)).toHaveAttr('src', 'img/star-on.png');
		expect($imgs1.eq(1)).toHaveAttr('src', 'img/star-on.png');
		expect($imgs1.eq(2)).toHaveAttr('src', 'img/star-on.png');
		expect($imgs1.eq(3)).toHaveAttr('src', 'img/star-on.png');
		expect($imgs1.eq(4)).toHaveAttr('src', 'img/star-off.png');
	
		expect($imgs2.eq(0)).toHaveAttr('src', 'img/star-on.png');
		expect($imgs2.eq(1)).toHaveAttr('src', 'img/star-on.png');
		expect($imgs2.eq(2)).toHaveAttr('src', 'img/star-on.png');
		expect($imgs2.eq(3)).toHaveAttr('src', 'img/star-on.png');
		expect($imgs2.eq(4)).toHaveAttr('src', 'img/star-off.png');
	
		expect($imgs3.eq(0)).toHaveAttr('src', 'img/star-on.png');
		expect($imgs3.eq(1)).toHaveAttr('src', 'img/star-on.png');
		expect($imgs3.eq(2)).toHaveAttr('src', 'img/star-on.png');
		expect($imgs3.eq(3)).toHaveAttr('src', 'img/star-on.png');
		expect($imgs3.eq(4)).toHaveAttr('src', 'img/star-off.png');
	});
	
	it('should cancel without click', function() {
		// given
		var $stars = $('.star').raty({ start: 1 });

		// when
		$stars.raty('cancel');

		// then
		var $imgs1 = $stars.eq(0).children('img'),
			$imgs2 = $stars.eq(1).children('img'),
			$imgs3 = $stars.eq(2).children('img');

		expect($imgs1.eq(0)).toHaveAttr('src', 'img/star-off.png');
		expect($imgs1.eq(1)).toHaveAttr('src', 'img/star-off.png');
		expect($imgs1.eq(2)).toHaveAttr('src', 'img/star-off.png');
		expect($imgs1.eq(3)).toHaveAttr('src', 'img/star-off.png');
		expect($imgs1.eq(4)).toHaveAttr('src', 'img/star-off.png');
		expect($stars.eq(0).children('input').val()).toEqual('');

		expect($imgs2.eq(0)).toHaveAttr('src', 'img/star-off.png');
		expect($imgs2.eq(1)).toHaveAttr('src', 'img/star-off.png');
		expect($imgs2.eq(2)).toHaveAttr('src', 'img/star-off.png');
		expect($imgs2.eq(3)).toHaveAttr('src', 'img/star-off.png');
		expect($imgs2.eq(4)).toHaveAttr('src', 'img/star-off.png');
		expect($stars.eq(1).children('input').val()).toEqual('');

		expect($imgs3.eq(0)).toHaveAttr('src', 'img/star-off.png');
		expect($imgs3.eq(1)).toHaveAttr('src', 'img/star-off.png');
		expect($imgs3.eq(2)).toHaveAttr('src', 'img/star-off.png');
		expect($imgs3.eq(3)).toHaveAttr('src', 'img/star-off.png');
		expect($imgs3.eq(4)).toHaveAttr('src', 'img/star-off.png');
		expect($stars.eq(2).children('input').val()).toEqual('');
	});
	
	it('should cancel with click', function() {
		// given
		var $stars = $('.star').raty({
			click: function(score, evt) {
				this.attr('title', (score === null) ? 'null' : score);
			},
			start: 1
		});

		// when
		$stars.raty('cancel', true);

		// then
		var $imgs1 = $stars.eq(0).children('img'),
			$imgs2 = $stars.eq(1).children('img'),
			$imgs3 = $stars.eq(2).children('img');
	
		expect($imgs1.eq(0)).toHaveAttr('src', 'img/star-off.png');
		expect($imgs1.eq(1)).toHaveAttr('src', 'img/star-off.png');
		expect($imgs1.eq(2)).toHaveAttr('src', 'img/star-off.png');
		expect($imgs1.eq(3)).toHaveAttr('src', 'img/star-off.png');
		expect($imgs1.eq(4)).toHaveAttr('src', 'img/star-off.png');
		expect($stars.eq(0)).toHaveAttr('title', 'null');
		expect($stars.eq(0).children('input').val()).toEqual('');

		expect($imgs2.eq(0)).toHaveAttr('src', 'img/star-off.png');
		expect($imgs2.eq(1)).toHaveAttr('src', 'img/star-off.png');
		expect($imgs2.eq(2)).toHaveAttr('src', 'img/star-off.png');
		expect($imgs2.eq(3)).toHaveAttr('src', 'img/star-off.png');
		expect($imgs2.eq(4)).toHaveAttr('src', 'img/star-off.png');
		expect($stars.eq(1)).toHaveAttr('title', 'null');
		expect($stars.eq(1).children('input').val()).toEqual('');

		expect($imgs3.eq(0)).toHaveAttr('src', 'img/star-off.png');
		expect($imgs3.eq(1)).toHaveAttr('src', 'img/star-off.png');
		expect($imgs3.eq(2)).toHaveAttr('src', 'img/star-off.png');
		expect($imgs3.eq(3)).toHaveAttr('src', 'img/star-off.png');
		expect($imgs3.eq(4)).toHaveAttr('src', 'img/star-off.png');
		expect($stars.eq(1)).toHaveAttr('title', 'null');
		expect($stars.eq(2).children('input').val()).toEqual('');
	});

	it('should click the star 3', function() {
		// given
		var $stars = $('.star').raty({
			click: function(score, evt) {
				this.attr('title', score);
			}
		});

		// when
		$stars.raty('click', 3);

		// then
		var $imgs1 = $stars.eq(0).children('img'),
			$imgs2 = $stars.eq(1).children('img'),
			$imgs3 = $stars.eq(2).children('img');
	
		expect($imgs1.eq(0)).toHaveAttr('src', 'img/star-on.png');
		expect($imgs1.eq(1)).toHaveAttr('src', 'img/star-on.png');
		expect($imgs1.eq(2)).toHaveAttr('src', 'img/star-on.png');
		expect($imgs1.eq(3)).toHaveAttr('src', 'img/star-off.png');
		expect($imgs1.eq(4)).toHaveAttr('src', 'img/star-off.png');
		expect($stars.eq(0)).toHaveAttr('title', 3);

		expect($imgs2.eq(0)).toHaveAttr('src', 'img/star-on.png');
		expect($imgs2.eq(1)).toHaveAttr('src', 'img/star-on.png');
		expect($imgs2.eq(2)).toHaveAttr('src', 'img/star-on.png');
		expect($imgs2.eq(3)).toHaveAttr('src', 'img/star-off.png');
		expect($imgs2.eq(4)).toHaveAttr('src', 'img/star-off.png');
		expect($stars.eq(1)).toHaveAttr('title', 3);

		expect($imgs3.eq(0)).toHaveAttr('src', 'img/star-on.png');
		expect($imgs3.eq(1)).toHaveAttr('src', 'img/star-on.png');
		expect($imgs3.eq(2)).toHaveAttr('src', 'img/star-on.png');
		expect($imgs3.eq(3)).toHaveAttr('src', 'img/star-off.png');
		expect($imgs3.eq(4)).toHaveAttr('src', 'img/star-off.png');
		expect($stars.eq(2)).toHaveAttr('title', 3);
	});
	
	it('should set a target on div with click', function() {
		$('body').append('<div id="hint1"></div><div id="hint2"></div><div id="hint3"></div>');

		// given
		var $hint1	= $('#hint1'),
			$hint2	= $('#hint2'),
			$hint3	= $('#hint3'),
			$stars	= $('.star');

		$stars.eq(0).raty({ target: '#hint1', targetKeep: true, click: function(score, evt) { } });
		$stars.eq(1).raty({ target: '#hint2', targetKeep: true, click: function(score, evt) { } });
		$stars.eq(2).raty({ target: '#hint3', targetKeep: true, click: function(score, evt) { } });

		// when
		$stars.raty('click', 4);

		// then
		expect($hint1).toHaveHtml('good');
		expect($hint2).toHaveHtml('good');
		expect($hint3).toHaveHtml('good');

		$hint1.remove();
		$hint2.remove();
		$hint3.remove();
	});
	
	it('should set a target on div with start', function() {
		$('body').append('<div id="hint1"></div><div id="hint2"></div><div id="hint3"></div>');

		// given
		var $hint1	= $('#hint1'),
			$hint2	= $('#hint2'),
			$hint3	= $('#hint3'),
			$stars	= $('.star');
	
		$stars.eq(0).raty({ target: '#hint1', targetKeep: true, click: function(score, evt) { } });
		$stars.eq(1).raty({ target: '#hint2', targetKeep: true, click: function(score, evt) { } });
		$stars.eq(2).raty({ target: '#hint3', targetKeep: true, click: function(score, evt) { } });

		// when
		$stars.raty('start', 4);

		// then
		expect($hint1).toHaveHtml('good');
		expect($hint2).toHaveHtml('good');
		expect($hint3).toHaveHtml('good');

		$hint1.remove();
		$hint2.remove();
		$hint3.remove();
	});

	it('should set a target on div with cancel', function() {
		$('body').append('<div id="hint1"></div><div id="hint2"></div><div id="hint3"></div>');

		// given
		var $hint1	= $('#hint1'),
			$hint2	= $('#hint2'),
			$hint3	= $('#hint3'),
			$stars	= $('.star');
	
		$stars.eq(0).raty({ cancel: true, target: '#hint1', targetKeep: true, click: function(score, evt) { } });
		$stars.eq(1).raty({ cancel: true, target: '#hint2', targetKeep: true, click: function(score, evt) { } });
		$stars.eq(2).raty({ cancel: true, target: '#hint3', targetKeep: true, click: function(score, evt) { } });

		// when
		$stars.raty('cancel');

		// then
		expect($hint1).toHaveHtml('cancel this rating!');
		expect($hint2).toHaveHtml('cancel this rating!');
		expect($hint3).toHaveHtml('cancel this rating!');

		$hint1.remove();
		$hint2.remove();
		$hint3.remove();
	});
	
});