ServerEvents.tags('item', event => {
    event.remove('minecraft:dyeable', 'minecraft:bundle')
    
    event.add('c:foods/cheese', [
        'brewinandchewin:flaxen_cheese_wedge',
        'brewinandchewin:scarlet_cheese_wedge'
    ])

    event.add('c:stripped_logs', 
        'spawn:stripped_date_log',
        'spawn:stripped_rotten_log',
        'caverns_and_chasms:stripped_azalea_log'
    )

    event.add('c:stripped_woods', 
        'spawn:stripped_date_log',
        'spawn:stripped_rotten_log',
        'caverns_and_chasms:stripped_azalea_log'
    )

	event.add('forge:stripped_logs', 
        'spawn:stripped_date_log',
        'spawn:stripped_rotten_log',
        'caverns_and_chasms:stripped_azalea_log'
    )

	event.add('create:modded_stripped_logs', 
        'spawn:stripped_date_log',
        'spawn:stripped_rotten_log',
        'caverns_and_chasms:stripped_azalea_log'
    )

    event.add('create:modded_stripped_wood', 
        'spawn:stripped_date_log',
        'spawn:stripped_rotten_log',
        'caverns_and_chasms:stripped_azalea_log'
    )
})
