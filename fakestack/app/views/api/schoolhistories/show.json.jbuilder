json.schoolhistories do
  json.partial! 'api/schoolhistories/schoolhistory', schoolhistory: @history
end
