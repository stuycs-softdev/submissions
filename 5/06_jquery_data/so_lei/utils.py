# UTILS.py
#    - a bunch of various utility functions (mainly to load/search the data)


# opens the CSV
with open("sorted_data.csv", "r") as file:
    data = file.read().replace('\r\n', ',')

# total number of Pokemon in the csv    
POKEMON_COUNT = 811

# the number of traits each Pokemon has (id, name, etc.) 
COLUMNS = 8

# a bunch of "Tables" (lists) sorted by different attributes in 
# which the index always describes the same Pokemon
#       for example: the pokemon in T_order[0] describes the same Pokemon
#                    as in T_id[0]
T_order = []
T_id = []
T_name = []
T_species_id = []
T_height = []
T_weight = []
T_base_experience = []
T_is_default = []


c1 = 0 #counts to POKEMON_COUNT * COLUMNS
c2 = 0 #counts to POKEMON_COUNT
data = data.split(",")
data_length = len(data)

# load the CSV data into our "Tables"
while c1 < data_length:
    T_order.append(data[c1])
    T_id.append(data[c1+1])
    T_name.append(data[c1+2])
    T_species_id.append(data[c1+3])
    T_height.append(data[c1+4])
    T_weight.append(data[c1+5])
    T_base_experience.append(data[c1+6])
    T_is_default.append(data[c1+7])
    c2+=1
    c1+=8


def search_id(number):
    """ Search for a Pokemon by its ID number.
    
    Params:
       number - (integer) the Pokemon whose ID number you have.
    Returns:
       c1 - (integer) the index of the Pokemon in the lists above
    
    """
    c1 = 0
    while c1 < POKEMON_COUNT:
        if T_id[c1] == str(number):
            return c1
        c1+=1

def search_name_list(name):
    """ Searches for a Pokemon by its name.
    Params:
         name - (String) (part of) the name of the Pokemon you are searching for.
    Returns:
         index_list - (integer list) list of indexes of Pokemon you could want
    """
    c1 = 0
    index_list = []
    while c1 < POKEMON_COUNT:
        # return a list with only that index if the names match perfectly
        if name == T_name[c1]:
            index_list = [c1]
            return index_list
        if name in T_name[c1]:
            index_list.append(c1)
        c1+=1
    # if no perfect matches are made, then it will return a list of possible Pokemon
    return index_list

def get_pokemon_by_id(pokemon_id):
    """ Gets all the information about a specific Pokemon by its ID.
    Params:
        pokemon_id - (integer) the ID of the pokemon you are looking for
    Retuns:
        pokemon - (dictionary) whose keys are the attributes
    """
    pokemon_index = search_id(pokemon_id)
    pokemon = {}
    pokemon['order'] = T_order[pokemon_index]
    pokemon['id'] = pokemon_id
    pokemon['name'] = T_name[pokemon_index]
    pokemon['species_id'] = T_species_id[pokemon_index]    
    pokemon['height'] = T_height[pokemon_index]
    pokemon['weight'] = T_weight[pokemon_index]
    pokemon['base_experience'] = T_base_experience[pokemon_index]
    pokemon['is_default'] = T_is_default[pokemon_index]
    return pokemon

def get_pokemons_by_name(pokemon_name):
    """ Gets all the information about Pokemons whose name contain pokemon_name.
    Params:
        pokemon_name - (string) the name the Pokemons' name should contain
    Retuns:
        pokemons - (dictionary of dictionaries) whose keys are the pokemon indices
    """
    pokemon_list = search_name_list(pokemon_name)
    pokemons = {}
    for pokemon_index in pokemon_list:
        pokemon = {}
        pokemon['order'] = T_order[pokemon_index]
        pokemon['id'] = T_id[pokemon_index]
        pokemon['name'] = T_name[pokemon_index]
        pokemon['species_id'] = T_species_id[pokemon_index]    
        pokemon['height'] = T_height[pokemon_index]
        pokemon['weight'] = T_weight[pokemon_index]
        pokemon['base_experience'] = T_base_experience[pokemon_index]
        pokemon['is_default'] = T_is_default[pokemon_index]
        pokemons[str(pokemon_index)] = pokemon
    return pokemons
