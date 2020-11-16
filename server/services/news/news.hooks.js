
const { populate, iff } = require('feathers-hooks-common')
const myHook = require("./hooks")
const checkPermissions = require('feathers-permissions');
const { authenticate } = require('@feathersjs/authentication').hooks;
const populateComments = () => context => { return context.params.headers && context.params.headers['populatecomments'] == "true"; };
const slugify = require('feathers-slugify')
const commentSchema = {
  include: {
    service: 'api/comments',
    nameAs: 'comments',
    parentField: 'commentIds',
    childField: '_id',
    asArray: true,
    include: [{
      service: 'users',
      nameAs: 'user',
      parentField: 'userId',
      childField: '_id'
    },
    {
      service: 'api/comments',
      nameAs: 'replies',
      parentField: 'repliesId',
      childField: '_id',
      asArray: true,
      include: [{
        service: 'api/comments',
        nameAs: 'replies',
        parentField: 'repliesId',
        childField: '_id',
        asArray: true,
        include: [{
          service: 'api/comments',
          nameAs: 'replies',
          parentField: 'repliesId',
          childField: '_id',
          asArray: true,
          include: [{
            service: 'api/comments',
            nameAs: 'replies',
            parentField: 'repliesId',
            childField: '_id',
            asArray: true,
            include: [{
              service: 'api/comments',
              nameAs: 'replies',
              parentField: 'repliesId',
              childField: '_id',
              asArray: true,
              include: [{
                service: 'api/comments',
                nameAs: 'replies',
                parentField: 'repliesId',
                childField: '_id',
                asArray: true,
                include: [{
                  service: 'api/comments',
                  nameAs: 'replies',
                  parentField: 'repliesId',
                  childField: '_id',
                  asArray: true,
                  include: [{
                    service: 'api/comments',
                    nameAs: 'replies',
                    parentField: 'repliesId',
                    childField: '_id',
                    asArray: true
                  },{
                    service: 'users',
                    nameAs: 'user',
                    parentField: 'userId',
                    childField: '_id'
                  }]
                },
                {
                  service: 'users',
                  nameAs: 'user',
                  parentField: 'userId',
                  childField: '_id'
                }]
              },
              {
                service: 'users',
                nameAs: 'user',
                parentField: 'userId',
                childField: '_id'
              }]
            },
            {
              service: 'users',
              nameAs: 'user',
              parentField: 'userId',
              childField: '_id'
            }]
          },
          {
            service: 'users',
            nameAs: 'user',
            parentField: 'userId',
            childField: '_id'
          }]
        },
        {
          service: 'users',
          nameAs: 'user',
          parentField: 'userId',
          childField: '_id'
        }]
      },
      {
        service: 'users',
        nameAs: 'user',
        parentField: 'userId',
        childField: '_id'
      }]
    }]
  }
}
const query = {
  $limit: 10,
  $sort: {
    date: -1
  },
  $skip: 0
}

module.exports = {
  before: {
    all: [myHook()],
    find: [populate({ schema: query })],
    get: [],
    create: [authenticate('jwt'),checkPermissions({
      roles: ['admin', 'moderator']
    }),slugify({ slug: ['title'] })],
    update: [authenticate('jwt')],
    patch: [authenticate('jwt')],
    remove: [authenticate('jwt'),checkPermissions({
      roles: ['admin', 'moderator']
    })]
  },

  after: {
    all: [iff(populateComments(), populate({ schema: commentSchema }))],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
