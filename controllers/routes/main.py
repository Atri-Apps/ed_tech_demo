from .atri import Atri
from fastapi import Request, Response
from atri_utils import *


def hide_show_language(at: Atri, num: int):
    arr = ['61e60506c5dae076de78aaff_html5-tab-content-codely-webflow-ecommerce-template-p-800.png',
           '61e605055806d10763e3e00d_python-tab-content-codely-webflow-ecommerce-template-p-800.png',
           '61e6050665733068b3372b06_ruby-on-rails-tab-content-codely-webflow-ecommerce-template-p-800.png',
           '61e6050529cb295d31ea3c14_c++-tab-content-codely-webflow-ecommerce-template-p-800.png']
    for i in range(1,5):
        instance: at.Language_Text_1_Flex.__class__ = getattr(at, f'Language_Text_{i}_Flex')
        if i != num:
            instance.styles.display = 'none'
        else:
            img_instance: at.Image1.__class__ = getattr(at, f'Image24')
            instance.styles.display = 'flex'
            img_instance.custom.src = f'/app-assets/{arr[i-1]}'



    # instance: at.Language_Text_1_Flex.__class__ = getattr(at, f'Language_Text_{num}_Flex')
    # if instance.styles.display == 'none':
    #     instance.styles.display = 'flex'
    # else:
    #     instance.styles.display = 'none'


def init_state(at: Atri):
    """
    This function is called everytime "Publish" button is hit in the editor.
    The argument "at" is a dictionary that has initial values set from visual editor.
    Changing values in this dictionary will modify the intial state of the app.
    """
    at.Language_Text_2_Flex.styles.display = 'none'
    at.Language_Text_3_Flex.styles.display = 'none'
    at.Language_Text_4_Flex.styles.display = 'none'

    pass

def handle_page_request(at: Atri, req: Request, res: Response, query: str):
    """
    This function is called whenever a user loads this route in the browser.
    """
    pass

def handle_event(at: Atri, req: Request, res: Response):
    """
    This function is called whenever an event is received. An event occurs when user
    performs some action such as click button.
    """
    if at.Language_Flex_1.onClick:
        hide_show_language(at, 1)
    if at.Language_Flex_2.onClick:
        hide_show_language(at, 2)
    if at.Language_Flex_3.onClick:
        hide_show_language(at, 3)
    if at.Language_Flex_4.onClick:
        hide_show_language(at, 4)

    pass