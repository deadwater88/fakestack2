# This file is auto-generated from the current state of the database. Instead
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

ActiveRecord::Schema.define(version: 20170806031516) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "chatrooms", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

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

  create_table "conversations", force: :cascade do |t|
    t.text     "messages"
    t.string   "participants"
    t.datetime "created_at",   null: false
    t.datetime "updated_at",   null: false
    t.index ["participants"], name: "index_conversations_on_participants", using: :btree
  end

  create_table "friendings", force: :cascade do |t|
    t.integer  "requester_id",                 null: false
    t.integer  "recipient_id",                 null: false
    t.boolean  "approved",     default: false
    t.datetime "created_at",                   null: false
    t.datetime "updated_at",                   null: false
  end

  create_table "images", force: :cascade do |t|
    t.integer  "user_id",                      null: false
    t.string   "image_url"
    t.integer  "album_id"
    t.string   "title"
    t.text     "tagged_user_ids", default: [],              array: true
    t.datetime "created_at",                   null: false
    t.datetime "updated_at",                   null: false
    t.index ["user_id"], name: "index_images_on_user_id", using: :btree
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

  create_table "schoolhistories", force: :cascade do |t|
    t.string   "school",                      null: false
    t.string   "school_url"
    t.string   "school_img_url"
    t.integer  "user_id",                     null: false
    t.string   "location"
    t.text     "description"
    t.boolean  "graduated"
    t.string   "start_date"
    t.string   "end_date"
    t.string   "concentrations", default: [],              array: true
    t.string   "type"
    t.datetime "created_at",                  null: false
    t.datetime "updated_at",                  null: false
    t.string   "college_type",   default: ""
    t.index ["user_id"], name: "index_schoolhistories_on_user_id", using: :btree
  end

  create_table "users", id: :bigserial, force: :cascade do |t|
    t.string   "email",                          null: false
    t.string   "password_digest",                null: false
    t.string   "session_token",                  null: false
    t.datetime "created_at",                     null: false
    t.datetime "updated_at",                     null: false
    t.string   "first_name"
    t.string   "last_name"
    t.string   "profile_img_url", default: ""
    t.string   "intro",           default: ""
    t.string   "hometown",        default: ""
    t.string   "current_city",    default: ""
    t.text     "other_names",     default: [],                array: true
    t.string   "favorite_quotes", default: ""
    t.text     "places",          default: [],                array: true
    t.string   "cover_img_url",   default: ""
    t.string   "biography",       default: ""
    t.text     "friends",         default: "{}"
    t.text     "requesters",      default: "{}"
    t.text     "recipients",      default: "{}"
    t.index ["email"], name: "index_users_on_email", unique: true, using: :btree
    t.index ["first_name"], name: "index_users_on_first_name", using: :btree
    t.index ["last_name"], name: "index_users_on_last_name", using: :btree
    t.index ["password_digest"], name: "index_users_on_password_digest", unique: true, using: :btree
    t.index ["session_token"], name: "index_users_on_session_token", unique: true, using: :btree
  end

  create_table "users_conversations", id: false, force: :cascade do |t|
    t.integer  "user_id"
    t.integer  "conversation_id"
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
    t.index ["conversation_id"], name: "index_users_conversations_on_conversation_id", using: :btree
    t.index ["user_id"], name: "index_users_conversations_on_user_id", using: :btree
  end

  create_table "workhistories", force: :cascade do |t|
    t.string   "company",         null: false
    t.string   "company_url"
    t.string   "company_img_url"
    t.integer  "user_id",         null: false
    t.string   "position"
    t.string   "location"
    t.text     "description"
    t.boolean  "current"
    t.string   "start_date"
    t.string   "end_date"
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
    t.index ["user_id"], name: "index_workhistories_on_user_id", using: :btree
  end

end
