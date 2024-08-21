function(properties, context) {

	const notyf = new Notyf({
    	duration: properties.duration,
        ripple: properties.ripple,
        position: { x:properties.x, y: properties.y },
        dismissible: properties.dismissible,
        types: [
            {
                type: 'info',
                background: 'gray',
                icon: false
            },
			{
                type: 'warning',
                background: 'orange',
                icon: false
            }
        ]
    });

	notyf.open({type: properties.type, message:properties.message});

}