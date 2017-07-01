json.set! schoolhistory.id do
  json.set! :id, schoolhistory.id
  json.set! :school, schoolhistory.school
  json.set! :start_date, schoolhistory.start_date
  json.set! :end_date, schoolhistory.end_date
  json.set! :graduated, schoolhistory.graduated
  json.set! :college_type, schoolhistory.college_type
  json.set! :concentrations, schoolhistory.concentrations[0]
  json.set! :description, schoolhistory.description
end
