from django.urls import path
from . import views

urlpatterns = [
    path('welding_robot/', views.welding_robot, name='welding_robot'),
    path('stamping_press/', views.stamping_press, name='stamping_press'),
    path('painting_robot/', views.painting_robot, name='painting_robot'),
    path('agv/', views.agv, name='agv'),
    path('cnc_milling/', views.cnc_milling, name='cnc_milling'),
    path('leak_test/', views.leak_test, name='leak_test'),
]