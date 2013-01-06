require 'rubygems'
require 'middleman/rack'
require './nowww'
require 'sinatra'
require 'pony'

post '/contact' do 
  Pony.mail(
    :from => params[:email],
    :body => params[:message],
    :to => 'contact@cileos.com',
    :reply_to => params[:email],
    :subject => params[:name] + " has contacted you",
    :via => :smtp,
    :via_options => { 
      :address              => 'smtp.gmail.com', 
      :port                 => '587', 
      :enable_starttls_auto => true, 
      :user_name            => 'contactuser@cileos.com', 
      :password             => 'alsk10fritz8', 
      :authentication       => :plain, 
      :domain               => 'cileos.com'
    }
  )
  "Email sent!"
  redirect '/' 
end

use NoWWW
use Sinatra::Application
run Middleman.server