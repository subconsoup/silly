scoreboard players add @s eaten_marshmallows 1
advancement revoke @s only silly:food/eat_one_marshmallow
execute if score @s eaten_marshmallows matches 10 run advancement grant @s only silly:food/eat_charred_marshmallow
