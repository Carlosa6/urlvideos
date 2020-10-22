import { RequestHandler } from 'express'

export const createVideo:RequestHandler = (req, res) => res.json('creando videos')

export const getVideos:RequestHandler = (req, res) => res.json('getting videos')

export const getVideo:RequestHandler = (req, res) => res.json('getting video')

export const deleteVideo:RequestHandler = (req, res) => res.json('emilimando videos')

export const updateVideo:RequestHandler = (req, res) => res.json('actualizando videos')
