r# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170522035017) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "comments", force: :cascade do |t|
    t.integer  "author_id",   null: false
    t.text     "content",     null: false
    t.string   "parent_type"
    t.integer  "parent_id",   null: false
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.index ["author_id"], name: "index_comments_on_author_id", using: :btree
    t.index ["parent_type", "parent_id"], name: "index_comments_on_parent_type_and_parent_id", using: :btree
  end

  create_table "friendings", force: :cascade do |t|
    t.integer  "requester_id",                 null: false
    t.integer  "recipient_id",                 null: false
    t.boolean  "approved",     default: false
    t.datetime "created_at",                   null: false
    t.datetime "updated_at",                   null: false
  end

  create_table "posts", force: :cascade do |t|
    t.integer  "author_id",   null: false
    t.text     "content",     null: false
    t.integer  "location_id", null: false
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.index ["author_id"], name: "index_posts_on_author_id", using: :btree
    t.index ["location_id"], name: "index_posts_on_location_id", using: :btree
  end

  create_table "users", force: :cascade do |t|
    t.string   "email",                        null: false
    t.string   "password_digest",              null: false
    t.string   "session_token",                null: false
    t.datetime "created_at",                   null: false
    t.datetime "updated_at",                   null: false
    t.string   "first_name"
    t.string   "last_name"
    t.string   "profile_img_url", default: ""
    t.string   "intro",           default: ""
    t.string   "hometown",        default: ""
    t.string   "current_city",    default: ""
    t.text     "other_names",     default: [],              array: true
    t.string   "favorite_quotes", default: ""
    t.text     "places",          default: [],              array: true
    t.string   "cover_img_url",   default: ""
    t.string   "biography",       default: ""
    t.index ["email"], name: "index_users_on_email", unique: true, using: :btree
    t.index ["first_name"], name: "index_users_on_first_name", using: :btree
    t.index ["last_name"], name: "index_users_on_last_name", using: :btree
    t.index ["password_digest"], name: "index_users_on_password_digest", unique: true, using: :btree
    t.index ["session_token"], name: "index_users_on_session_token", unique: true, using: :btree
  end

end
