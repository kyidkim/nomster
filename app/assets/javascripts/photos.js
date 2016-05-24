# Place all the behaviors and hooks related to the matching controller here.
# All this logic will automatically be available in application.js.
# You can use CoffeeScript in this file: http://coffeescript.org/

<!-- Modal -->
<div class="modal fade" id="pictureModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
<div class="modal-dialog" role="document">
<div class="modal-content">
<div class="modal-header">
<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
<h4 class="modal-title" id="myModalLabel">Add a picture</h4>
</div>
<%= simple_form_for @photo, url: place_photos_path(@place) do |f| %>
<div class="modal-body">
<%= f.input :picture %>
<br/>
<%= f.input :caption %>
</div>
<div class="modal-footer">
<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
<%= f.submit "Upload Photo", class: 'btn btn-primary' %>
</div>
<% end %>
</div>
</div>
</div>
