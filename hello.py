# print("Hello, World!"); 

# def get_name_with_age(firstName:str,lastName:str, age:int):
#     return "The user name is " + firstName.title() + " " + lastName.title() + " and the age is " + str(age)

# print(get_name_with_age("Muhammad","Mukarram", 20))

def get_items(item_a: str, item_b: int, item_c: float, item_d: bool, item_e: bytes):
    return item_a, item_b, item_c, item_d, item_e


# Those internal types in the square brackets are called "type parameters".
# In this case, str is the type parameter passed to list.

# def getItems(items: list[str]):
#     for item in items:
#         print(item.capitalize())

# getItems(["apple", "banana", "cherry"])

# def process_items(items_t: tuple[int, int, str], items_s: set[bytes]):
#     return items_t, items_s

# print(process_items((1, 2, "three"), {b"one", b"two"}))

# def process_items(prices: dict[str, float]):
#     for item_name, item_price in prices.items():
#         print(item_name)
#         print(item_price)

# process_items({"apple": 1.99, "banana": 2.99, "cherry": 3.99})

# def process_item(item: int | str):
#     print(item)

# from typing import Optional

# def say_hi(name: Optional[str] = None):
#     if name is not None:
#         print(f"Hey {name}!")
#     else:
#         print("Hello World")

# def say_hi(name: str | None):
#     print(f"Hey {name}!")

# say_hi("Muhammad")
# say_hi()

# Classes in Python:

# class Person:
#     def __init__ (self, name: str, age):
#         self.name = name,
#         self.age = age
# def get_person_name(one_person: Person):
#     return f"Person name is {one_person.name} and age is {one_person.age}"

# print(get_person_name(Person("Muhammad", 20)))

# Notice that this means "one_person is an instance of the class Person".
# It doesn't mean "one_person is the class called Person".

# from datetime import datetime
# from pydantic import BaseModel  // it is not installed yet.


# class User(BaseModel):
#     id: int
#     name: str = "John Doe"
#     signup_ts: datetime | None = None
#     friends: list[int] = []


# external_data = {
#     "id": "123",
#     "signup_ts": "2017-06-01 12:22",
#     "friends": [1, "2", b"3"],
# }
# user = User(**external_data)
# print(user)
# > User id=123 name='John Doe' signup_ts=datetime.datetime(2017, 6, 1, 12, 22) friends=[1, 2, 3]
# print(user.id)
# > 123

from typing import Annotated
def say_hello(name: Annotated[str, "this is just metadata"]) -> str:
    return f"Hello {name}"

# Python itself doesn't do anything with this Annotated. And for editors and other tools, the type is still str.
# But you can use this space in Annotated to provide FastAPI with additional metadata about how you want your application to behave.
# The important thing to remember is that the first type parameter you pass to Annotated is the actual type. The rest, is just metadata for other tools.
# For now, you just need to know that Annotated exists, and that it's standard Python. 